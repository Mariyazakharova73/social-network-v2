import React, { FC, MouseEvent } from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import EditIcon from "@mui/icons-material/Edit";
import PanoramaIcon from "@mui/icons-material/Panorama";
import userAvatar from "../../images/user.png";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import EditPhotoModal from "../Modal/EditPhotoModal";
import OpenImageModal from "../Modal/OpenImageModal";
import { useTranslation } from "react-i18next";

interface IProfileAvatarProps {
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
  anchorEl: null | HTMLElement;
  handleClose: () => void;
  photo: string;
  isOwner: boolean;
  savePhoto: (file: string | Blob) => void;
}

const ProfileAvatar: FC<IProfileAvatarProps> = ({
  handleClick,
  anchorEl,
  handleClose,
  photo,
  isOwner,
  savePhoto,
}) => {
  const { t } = useTranslation();
  const open = Boolean(anchorEl);
  const [openModal, setOpenModal] = React.useState(false);
  const [openPhotoModal, setOpenPhotoModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleOpenPhotoModal = () => setOpenPhotoModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const handleClosePhotoModal = () => setOpenPhotoModal(false);

  const handleClickEditPhoto = () => {
    handleClose();
    handleOpenModal();
  };

  const handleClickOpenPhoto = () => {
    handleClose();
    handleOpenPhotoModal();
  };

  return (
    <>
      <EditPhotoModal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        savePhoto={savePhoto}
      />
      <OpenImageModal
        openModal={openPhotoModal}
        handleClosePhotoModal={handleClosePhotoModal}
        photo={photo}
      />
      <Tooltip title="Avatar settings">
        <IconButton
          onClick={handleClick}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar sx={{ height: "100px", width: "100px" }} src={photo || userAvatar} />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClickOpenPhoto}>
          <ListItemIcon>
            <PanoramaIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>{t("openPhoto")}</ListItemText>
        </MenuItem>
        {isOwner && (
          <MenuItem onClick={handleClickEditPhoto}>
            <ListItemIcon>
              <EditIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>{t("editPhoto")}</ListItemText>
          </MenuItem>
        )}
      </Menu>
    </>
  );
};

export default ProfileAvatar;
