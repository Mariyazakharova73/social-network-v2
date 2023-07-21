import React, { FC } from "react";
import { Formik, Form, Field } from "formik";
import { FilterType } from "../../redux/reducers/usersReducer";
import { useSelector } from "react-redux";
import { getUsersFilter } from "../../redux/selectors/usersSelectors";
import { changeStrValues } from "./../../utils/helpers";

interface IUsersSearchFormProps {
  onFilterChanged: (filter: FilterType) => void;
  searchParams: URLSearchParams;
  setSearchParams: any;
}

type FriendFormType = "true" | "false" | "null";

interface IFormValues {
  term: string;
  friend: FriendFormType;
}

const usersSearchFormValidate = (values: any) => {
  const errors = {};
  return errors;
};

const UsersSearchForm: FC<IUsersSearchFormProps> = ({
  onFilterChanged,
  searchParams,
  setSearchParams,
}) => {
  const filter = useSelector(getUsersFilter);

  const submit = (
    values: IFormValues,
    { setSubmitting }: { setSubmitting: (isSubmiting: boolean) => void }
  ) => {
    onFilterChanged({
      term: values.term,
      friend: changeStrValues(values.friend),
    });

    //setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ term: filter.term, friend: String(filter.friend) as FriendFormType }}
      validate={usersSearchFormValidate}
      onSubmit={submit}
      enableReinitialize
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="term" />
          <Field component="select" id="location" name="friend">
            <option value="null">All</option>
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
