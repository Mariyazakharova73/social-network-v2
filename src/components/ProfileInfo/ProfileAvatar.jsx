import React from "react";
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
import BasicModal from "../BasicModal/BasicModal";

const ProfileAvatar = ({ handleClick, anchorEl, handleClose, photo, isOwner }) => {
  const open = Boolean(anchorEl);
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleClickEditPhoto = () => {
    handleClose(handleOpenModal());
  };

  return (
    <>
      <BasicModal openModal={openModal} handleCloseModal={handleCloseModal} />
      <Tooltip title="Avatar settings">
        <IconButton
          onClick={handleClick}
          sx={{ ml: 2 }}
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
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PanoramaIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Open photo</ListItemText>
        </MenuItem>
        {isOwner && <MenuItem onClick={handleClickEditPhoto}>
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Edit photo</ListItemText>
        </MenuItem>}
      </Menu>
    </>
  );
};

export default ProfileAvatar;
