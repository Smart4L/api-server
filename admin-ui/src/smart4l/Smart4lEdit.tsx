import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const Smart4lEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="date" source="date" />
        <TextInput label="name" source="name" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
