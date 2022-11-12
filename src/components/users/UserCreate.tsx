/* eslint react/jsx-key: off */
import * as React from 'react';
import Aside from './Aside';

const UserEditToolbar = ({ permissions, ...props }: any) => {
    // const notify = useNotify();
    // const { reset } = useFormContext();

    return (
        // <Toolbar {...props}>
        //     <SaveButton label="user.action.save_and_show" />
        //     {permissions === 'admin' && (
        //         <SaveButton
        //             label="user.action.save_and_add"
        //             mutationOptions={{
        //                 onSuccess: data => {
        //                     notify('ra.notification.created', {
        //                         type: 'info',
        //                         messageArgs: {
        //                             smart_count: 1,
        //                         },
        //                     });
        //                     reset();
        //                 },
        //             }}
        //             type="button"
        //             variant="text"
        //         />
        //     )}
        // </Toolbar>
        <></>
    );
};

const isValidName = async (value: any) =>
    new Promise<string | undefined>(resolve =>
        setTimeout(() =>
            resolve(value === 'Admin' ? "Can't be Admin" : undefined)
        )
    );

const UserCreate = () => {
    // const { permissions } = usePermissions();
    return (
        // <Create aside={<Aside />} redirect="show">
        //     <TabbedForm
        //         mode="onBlur"
        //         warnWhenUnsavedChanges
        //         toolbar={<UserEditToolbar permissions={permissions} />}
        //     >
        //         <FormTab label="user.form.summary" path="">
        //             <TextInput
        //                 source="name"
        //                 defaultValue="Slim Shady"
        //                 autoFocus
        //                 validate={[required(), isValidName]}
        //             />
        //         </FormTab>
        //         {permissions === 'admin' && (
        //             <FormTab label="user.form.security" path="security">
        //                 <AutocompleteInput
        //                     source="role"
        //                     choices={[
        //                         { id: '', name: 'None' },
        //                         { id: 'admin', name: 'Admin' },
        //                         { id: 'user', name: 'User' },
        //                         { id: 'user_simple', name: 'UserSimple' },
        //                     ]}
        //                     validate={[required()]}
        //                 />
        //             </FormTab>
        //         )}
        //     </TabbedForm>
        // </Create>
        <></>
    );
};

export default UserCreate;
