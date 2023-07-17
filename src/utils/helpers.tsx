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

export function createField<FormKeysType extends string>(
  name: FormKeysType,
  placeholder: string | null,
  touched: any,
  errors: any,
  type: string = "text",
  size: string = "small",
  fullWidth: boolean = false,
  label: string | null = null,
  variant: string = "outlined",
  multiline: boolean = false
) {
  return (
    <Field
      variant={variant}
      label={label}
      fullWidth={fullWidth}
      multiline={multiline}
      size={size}
      as={TextField}
      name={name}
      placeholder={placeholder}
      error={touched[name] && !!errors[name]}
      helperText={touched[name] && errors[name]}
      type={type}
    />
  );
}
