import React, { FC } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import ProfileContact from "../ProfileContact/ProfileContact";
import Divider from "@mui/material/Divider";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { IProfile } from "../../types/types";

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
      <Typography component="p">Full name: {profile?.fullName}</Typography>
      <Typography component="p">About me: {profile?.aboutMe}</Typography>
      <Typography component="p">
        Looking for a job: {profile?.lookingForAJob ? "yes" : "no"}
      </Typography>
      {profile?.lookingForAJobDescription && (
        <Typography component="p">
          My professional skills: {profile?.lookingForAJobDescription}
        </Typography>
      )}
      <Stack direction="row">
        <Stack direction="row" sx={{ flexWrap: "wrap" }}>
          Contacts:&ensp;
          {profile?.contacts &&
            Object.keys(profile?.contacts).map((item) => {
              return (
                <React.Fragment key={item}>
                  <ProfileContact contactTitle={item} 
                 // contactValue={profile?.contacts[item]} 
                  contactValue='test'
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
      <ProfileStatus prevStatus={status} updateStatus={updateStatus} />
    </Stack>
  );
};

export default ProfileData;
