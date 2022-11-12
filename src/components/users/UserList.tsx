/* eslint react/jsx-key: off */
import * as React from 'react';
import PeopleIcon from '@mui/icons-material/People';
import memoize from 'lodash/memoize';
import { useMediaQuery, Theme } from '@mui/material';

import Aside from './Aside';
import UserEditEmbedded from './UserEditEmbedded';
export const UserIcon = PeopleIcon;

const getUserFilters = (permissions: any) =>
    [
        // <SearchInput source="q" alwaysOn />,
        // <TextInput source="name" />,
        // permissions === 'admin' ? <TextInput source="role" /> : null,
    ].filter(filter => filter !== null);

const UserBulkActionButtons = (props: any) => (
    // <BulkDeleteWithConfirmButton {...props} />
    <></>
);

const rowClick = memoize((permissions: any) => (id: any, resource: any, record: any) => {
    return permissions === 'admin'
        ? Promise.resolve('edit')
        : Promise.resolve('show');
});

const UserList = () => {
    return (
       <></>
    );
};

export default UserList;
