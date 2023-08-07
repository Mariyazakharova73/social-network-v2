import React, { FC } from "react";
import { Formik, Form } from "formik";
import { FilterType } from "../../redux/reducers/usersReducer";
import { useSelector } from "react-redux";
import { getUsersFilter } from "../../redux/selectors/usersSelectors";
import { changeStrValues, createField } from "./../../utils/helpers";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import s from "./UsersSearchForm.module.css";
import { useTranslation } from "react-i18next";

interface IUsersSearchFormProps {
  onFilterChanged: (filter: FilterType) => void;
}

type FriendFormType = "true" | "false" | "null";

interface IFormValues {
  term: string;
  friend: FriendFormType;
}

const usersSearchFormValidate = (values: IFormValues) => {
  const errors = {};
  return errors;
};

const UsersSearchForm: FC<IUsersSearchFormProps> = ({
  onFilterChanged,
}) => {
  const { t } = useTranslation();
  const filter = useSelector(getUsersFilter);

  const submit = (
    values: IFormValues,
    { setSubmitting }: { setSubmitting: (isSubmiting: boolean) => void }
  ) => {
    onFilterChanged({
      term: values.term,
      friend: changeStrValues(values.friend),
    });
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
        <Form className={s.form}>
          {createField("term", t("search"), touched, errors, t, { size: "small" })}
          <TextField
            value={values.friend}
            size="small"
            select
            name="friend"
            onChange={handleChange}
          >
            <MenuItem value="null">{t("all")}</MenuItem>
            <MenuItem value="true">{t("followed")}</MenuItem>
            <MenuItem value="false">{t("unfollowed")}</MenuItem>
          </TextField>
          <Button variant="contained" type="submit" disabled={isSubmitting} sx={{ height: "40px" }}>
            {t("find")}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default UsersSearchForm;
