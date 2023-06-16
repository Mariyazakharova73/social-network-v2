import React from "react";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const ProfileStatus = ({
  deactivateEditMode,
  status,
  activateEditMode,
  editMode,
  onStatusChange,
  textStatus,
}) => {
  return !editMode ? (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Typography component="p">Статус: {textStatus ? textStatus : "Не задан"}</Typography>
      <IconButton aria-label="delete" size="small" onClick={activateEditMode}>
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
