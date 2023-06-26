import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const ProfileStatus = ({ updateStatusThunk, prevStatus }) => {
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
    updateStatusThunk(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return !editMode ? (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Typography component="p">Status: {prevStatus ? prevStatus : "Не задан"}</Typography>
      <IconButton size="small" onClick={activateEditMode}>
        <EditIcon fontSize="inherit" />
      </IconButton>
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
