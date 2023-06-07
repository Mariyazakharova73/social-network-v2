import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";

const ProfileInfo = ({ profile }) => {
  if (!profile) {
    return <CircularProgress />;
  }
ы
  return (
    <Stack direction="row" spacing={3}>
      <Avatar alt="Avatar." src={profile.photos?.large} sx={{ height: "90px", width: "90px" }} />
      <Stack>
        <Typography component="p">Имя: {profile.fullName}</Typography>
        <Typography component="p">О себе: {profile.aboutMe}</Typography>
        <Typography component="p">Информация: {profile.lookingForAJobDescription}</Typography>
      </Stack>
    </Stack>
  );
};

export default ProfileInfo;
