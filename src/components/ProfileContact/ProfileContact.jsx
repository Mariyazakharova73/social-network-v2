import React from "react";
import Typography from "@mui/material/Typography";

const ProfileContact = ({ contactTitle, contactValue }) => {
  return (
    <Typography component="p">
      {contactTitle}: {contactValue}
    </Typography>
  );
};

export default ProfileContact;
