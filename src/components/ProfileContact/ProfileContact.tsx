import React, { FC } from "react";
import Typography from "@mui/material/Typography";

interface IProfileContactProps {
  contactTitle: string;
  contactValue: string;
}

const ProfileContact: FC<IProfileContactProps> = ({ contactTitle, contactValue }) => {
  return (
    <Typography component="p">
      {contactTitle}: {contactValue}
    </Typography>
  );
};

export default ProfileContact;
