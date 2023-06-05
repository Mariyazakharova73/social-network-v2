import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { avatar } from "../../utils/constants";
import Typography from "@mui/material/Typography";

const ProfileInfo = () => {
  return (
    <Stack direction="row" spacing={3}>
      <Avatar alt="Avatar." src={avatar} sx={{ height: "90px", width: "90px" }} />
      <Stack>
        <Typography component="p">Захарова Мария</Typography>
        <Typography component="p">Date of Birth: 6.09.1994</Typography>
        <Typography component="p">City: Ulyanovsk</Typography>
        <Typography component="p">Education: "УлГТУ"</Typography>
      </Stack>
    </Stack>
  );
};

export default ProfileInfo;
