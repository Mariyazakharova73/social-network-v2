import React, { FC } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import ProfileContact from "../ProfileContact/ProfileContact";
import Divider from "@mui/material/Divider";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { IContacts, IProfile } from "../../types/types";

interface IProfileDataProps {
  profile: IProfile | null;
  status: string;
  updateStatus: (status: string) => void;
  isOwner: boolean;
  handleOpenForm: () => void;
}

const ProfileData: FC<IProfileDataProps> = ({
  profile,
  status,
  updateStatus,
  isOwner,
  handleOpenForm,
}) => {
  return (
    // при width больше 600px ml=16px
    <Stack ml={{ sm: 2 }}>
      <Typography component="p">
        <span style={{ fontWeight: "bold" }}>Full name:</span> {profile?.fullName}
      </Typography>
      <Typography component="p">
        <span style={{ fontWeight: "bold" }}>About me:</span> {profile?.aboutMe}
      </Typography>
      <Typography component="p">
        <span style={{ fontWeight: "bold" }}>Looking for a job: </span>
        {profile?.lookingForAJob ? "yes" : "no"}
      </Typography>
      {profile?.lookingForAJobDescription && (
        <Typography component="p">
          <span style={{ fontWeight: "bold" }}>My professional skills: </span>
          {profile?.lookingForAJobDescription}
        </Typography>
      )}
      <Stack direction="row">
        <Stack direction="row" sx={{ flexWrap: "wrap", fontFamily: "montserrat" }}>
        <span style={{ fontWeight: "bold" }}>Contacts:&ensp;</span>
          {profile?.contacts &&
            Object.keys(profile?.contacts).map((item) => {
              return (
                <React.Fragment key={item}>
                  <ProfileContact
                    contactTitle={item}
                    contactValue={profile?.contacts[item as keyof IContacts]}
                  />
                  &ensp;
                </React.Fragment>
              );
            })}
        </Stack>
        {isOwner && (
          <IconButton size="small" onClick={handleOpenForm}>
            <EditIcon fontSize="inherit" />
          </IconButton>
        )}
      </Stack>
      <Divider />
      <ProfileStatus prevStatus={status} updateStatus={updateStatus} isOwner={isOwner} />
    </Stack>
  );
};

export default ProfileData;
