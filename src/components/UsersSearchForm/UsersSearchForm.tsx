import React, { FC } from "react";
import { Formik, Form, Field } from "formik";
import { FilterType } from "../../redux/reducers/usersReducer";
import { useSelector } from "react-redux";
import { getUsersFilter } from "../../redux/selectors/usersSelectors";
import { changeStrValues } from "./../../utils/helpers";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

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
      initialValues={{
        term: filter.term,
        friend: String(filter.friend) as FriendFormType,
      }}
      onSubmit={submit}
      enableReinitialize
    >
      {({ isSubmitting, handleChange, values, errors, touched, dirty }) => (
        <Form style={{ display: "flex", gap: "5px", flexWrap: "wrap", justifyContent: 'center' }}>
          <Field
            as={TextField}
            variant="outlined"
            placeholder="Поиск..."
            type="text"
            name="term"
            size="small"
          />
          <TextField
            value={values.friend}
            size="small"
            select
            name="friend"
            onChange={handleChange}
          >
            <MenuItem value="null">All</MenuItem>
            <MenuItem value="true">Only followed</MenuItem>
            <MenuItem value="false">Only unfollowed</MenuItem>
          </TextField>
          <Button
            variant="contained"
            type="submit"
            disabled={isSubmitting}
            sx={{ height: "40px" }}
          >
            Find
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default UsersSearchForm;
