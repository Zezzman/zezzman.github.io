import { DataProvider } from 'react-admin';
import data from './data';
import addUploadFeature from './addUploadFeature';
import RestProvider from '../../libraries/restProvider';

const dataProvider = new RestProvider(data);

const addTagsSearchSupport = (dataProvider: DataProvider) => ({
    ...dataProvider,
    getList: (resource: any, params: any) => {
        if (resource === 'comments') {
            // partial pagination
            return dataProvider
                .getList(resource, params)
                .then(({ data, total }) => ({
                    data,
                    pageInfo: {
                        hasNextPage:
                            params.pagination.perPage * params.pagination.page <
                            (total || 0),
                        hasPreviousPage: params.pagination.page > 1,
                    },
                }));
        }
        if (resource === 'tags') {
            const matchSearchFilter = Object.keys(params.filter).find(key =>
                key.endsWith('_q')
            );
            if (matchSearchFilter) {
                const searchRegExp = new RegExp(
                    params.filter[matchSearchFilter],
                    'i'
                );

                return dataProvider.getList(resource, {
                    ...params,
                    filter: (item: any) => {
                        const matchPublished =
                            item.published == params.filter.published; // eslint-disable-line eqeqeq

                        const fieldName = matchSearchFilter.replace(
                            /(_q)$/,
                            ''
                        );
                        return (
                            matchPublished &&
                            item && (item[fieldName]?.match(searchRegExp) !== null)
                        );
                    },
                });
            }
        }

        return dataProvider.getList(resource, params);
    },
});

const uploadCapableDataProvider = addUploadFeature(
    addTagsSearchSupport(dataProvider)
);

const sometimesFailsDataProvider = new Proxy(uploadCapableDataProvider, {
    get: (target, name) => (resource: any, params: any) => {
        if (typeof name === 'symbol' || name === 'then') {
            return;
        }
        // set session_ended=true in localStorage to trigger an API auth error
        if (localStorage.getItem('session_ended')) {
            const error = new Error('Session ended') as ResponseError;
            error.status = 403;
            return Promise.reject(error);
        }
        // add rejection by type or resource here for tests, e.g.
        // if (name === 'delete' && resource === 'posts') {
        //     return Promise.reject(new Error('deletion error'));
        // }
        if (
            resource === 'posts' &&
            params.data &&
            params.data.title === 'f00bar'
        ) {
            return Promise.reject(new Error('this title cannot be used'));
        }
        return uploadCapableDataProvider[name](resource, params);
    },
});

const delayedDataProvider = new Proxy(sometimesFailsDataProvider, {
    get: (target, name) => (resource: any, params: any) => {
        if (typeof name === 'symbol' || name === 'then') {
            return;
        }
        return new Promise(resolve =>
            setTimeout(
                () =>
                    resolve(sometimesFailsDataProvider[name](resource, params)),
                300
            )
        );
    },
});

interface ResponseError extends Error {
    status?: number;
}

export default delayedDataProvider;
