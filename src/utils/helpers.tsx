import TextField from "@mui/material/TextField";
import { Field } from "formik";
import { IProfile, IUser } from "../types/types";
import { IProfileFormValues } from "./../components/Modal/ProfileForm";

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

export const setProfileInitialValues = (obj: IProfile | null) => {
  return {
    fullName: obj?.fullName,
    lookingForAJob: obj?.lookingForAJob,
    lookingForAJobDescription: obj?.lookingForAJobDescription,
    aboutMe: obj?.aboutMe,
    facebook: obj?.contacts?.facebook,
    website: obj?.contacts?.website,
    vk: obj?.contacts?.vk,
    twitter: obj?.contacts?.twitter,
    instagram: obj?.contacts?.instagram,
    youtube: obj?.contacts?.youtube,
    github: obj?.contacts?.github,
    mainLink: obj?.contacts?.mainLink,
  };
};

export const getProfileDataForSubmit = (values?: IProfileFormValues) => {
  return {
    fullName: values?.fullName || "",
    lookingForAJob: values?.lookingForAJob || false,
    lookingForAJobDescription: values?.lookingForAJobDescription || "",
    aboutMe: values?.aboutMe || "",
    contacts: {
      facebook: values?.facebook || "",
      website: values?.website || "",
      vk: values?.vk || "",
      twitter: values?.twitter || "",
      instagram: values?.instagram || "",
      youtube: values?.youtube || "",
      github: values?.github || "",
      mainLink: values?.mainLink || "",
    },
  };
};
