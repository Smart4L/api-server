import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const LocationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="gps" source="gps" />
      </SimpleForm>
    </Create>
  );
};