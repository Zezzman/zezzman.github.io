/* eslint react/jsx-key: off */
import * as React from 'react';
import Aside from './Aside';

/**
 * Custom Toolbar for the Edit form
 *
 * Save with undo, but delete with confirm
 */
const UserEditToolbar = (props: any) => {
    return (
       /*  <Toolbar
            sx={{ display: 'flex', justifyContent: 'space-between' }}
            {...props}
        >
            <SaveButton />
            <DeleteWithConfirmButton />
        </Toolbar> */
        <></>
    );
};

const EditActions = () => (
    // <TopToolbar>
    //     <CloneButton className="button-clone" />
    //     <ShowButton />
    // </TopToolbar>
    <></>
);

const UserEditForm = ({ save, ...props }: { save?: any }) => {
    /* const { permissions } = usePermissions();
    const newSave = (values: any) =>
        new Promise((resolve, reject) => {
            if (values.name === 'test') {
                return resolve({
                    name: {
                        message: 'ra.validation.minLength',
                        args: { min: 10 },
                    },
                });
            }
            return save(values);
        }); */

    return (
        // <TabbedForm
        //     defaultValues={{ role: 'user' }}
        //     toolbar={<UserEditToolbar />}
        //     {...props}
        //     onSubmit={newSave}
        // >
        //     <FormTab label="user.form.summary" path="">
        //         {permissions === 'admin' && <TextInput disabled source="id" />}
        //         <TextInput
        //             source="name"
        //             defaultValue="slim shady"
        //             validate={required()}
        //         />
        //     </FormTab>
        //     {permissions === 'admin' && (
        //         <FormTab label="user.form.security" path="security">
        //             <SelectInput
        //                 source="role"
        //                 validate={required()}
        //                 choices={[
        //                     { id: '', name: 'None' },
        //                     { id: 'admin', name: 'Admin' },
        //                     { id: 'user', name: 'User' },
        //                 ]}
        //                 defaultValue={'user'}
        //             />
        //         </FormTab>
        //     )}
        // </TabbedForm>
        <></>
    );
};
const UserEdit = () => {
    return (
        // <Edit aside={<Aside />} actions={<EditActions />}>
        //     <UserEditForm />
        // </Edit>
        <></>
    );
};

export default UserEdit;
