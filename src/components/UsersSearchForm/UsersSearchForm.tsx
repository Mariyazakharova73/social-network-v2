import React, { FC } from "react";
import { Formik, Form, Field } from "formik";
import { FilterType } from "../../redux/reducers/usersReducer";

interface IUsersSearchFormProps {
  onFilterChanged: (filter: FilterType) => void;
}

interface IFormValues {
  term: string;
  friend: "true" | "false" | "null";
}

const usersSearchFormValidate = (values: any) => {
  const errors = {};
  return errors;
};

const UsersSearchForm: FC<IUsersSearchFormProps> = ({ onFilterChanged }) => {
  const submit = (
    values: any,
    { setSubmitting }: { setSubmitting: (isSubmiting: boolean) => void }
  ) => {

    const filter: FilterType = {
      term: values.term,
      friend: values.friend === "null" ? null : values.friend === "true" ? true : false,
    };
    onFilterChanged(filter);
    //setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ term: "", friend: "null" }}
      validate={usersSearchFormValidate}
      onSubmit={submit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="term" />
          <Field component="select" id="location" name="friend">
            <option value="nul">All</option>
            <option value="true">Only followed</option>
            <option value="false">Only unfollowed</option>
          </Field>
          <button type="submit" disabled={isSubmitting}>
            Find
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default UsersSearchForm;
