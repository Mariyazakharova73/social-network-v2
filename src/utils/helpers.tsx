import TextField from "@mui/material/TextField";
import { Field } from "formik";
import { IUser } from "../types/types";

export const updateObjectInArray = (
  items: IUser[],
  itemId: number,
  objPropsName: string,
  newObjProps: { followed: boolean }
) => {
  return items.map((item) => {
    // @ts-ignore
    if (item[objPropsName] === itemId) {
      return { ...item, ...newObjProps };
    }
    return item;
  });
};

export const changeStrValues = (dataFriend: string) => {
  switch (dataFriend) {
    case "null":
      return null;
    case "true":
      return true;
    case "false":
      return false;
    default:
      return null;
  }
};

export function createField<FormKeysType extends string>(
  name: FormKeysType,
  placeholder: string | null,
  touched: any,
  errors: any,
  props: any = {}
) {
  return (
    <Field
      name={name}
      placeholder={placeholder}
      as={TextField}
      error={touched[name] && !!errors[name]}
      helperText={touched[name] && errors[name]}
      {...props}
    />
  );
}
