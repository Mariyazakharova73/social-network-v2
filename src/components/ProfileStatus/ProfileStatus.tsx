import React, { useState, useEffect, FC, ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import s from "./ProfileStatus.module.css";
import { useTranslation } from "react-i18next";

interface IProfileStatus {
  prevStatus: string;
  updateStatus: (status: string) => void;
  isOwner: boolean;
}

const ProfileStatus: FC<IProfileStatus> = ({ updateStatus, prevStatus, isOwner }) => {
  const { t } = useTranslation();
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(prevStatus);

  useEffect(() => {
    setStatus(prevStatus);
  }, [prevStatus]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    updateStatus(status);
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  return !editMode ? (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Typography component="p">
        <span className={s.text}>{t("status")}:&ensp;</span> {prevStatus ? prevStatus : "Не задан"}
      </Typography>
      {isOwner && (
        <IconButton size="small" onClick={activateEditMode}>
          <EditIcon fontSize="inherit" />
        </IconButton>
      )}
    </Stack>
  ) : (
    <form>
      <TextField
        onChange={onStatusChange}
        variant="standard"
        value={status}
        onBlur={deactivateEditMode}
        autoFocus
      />
    </form>
  );
};

export default ProfileStatus;
