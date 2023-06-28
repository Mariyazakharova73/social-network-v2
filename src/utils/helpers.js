import TextField from "@mui/material/TextField";
import { Field } from "formik";

export const updateObjectInArray = (items, itemId, objPropsName, newObjProps) => {
  return items.map((item) => {
    if (item[objPropsName] === itemId) {
      return { ...item, ...newObjProps };
    }
    return item;
  });
};

export const createField = (name, placeholder, touched, errors, type = "text", size = "small") => {
  return (
    <Field
      size={size}
      as={TextField}
      name={name}
      placeholder={placeholder}
      error={touched[name] && !!errors[name]}
      helperText={touched[name] && errors[name]}
      type={type}
    />
  );
};
