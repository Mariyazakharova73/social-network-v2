import React, { FC } from "react";
import Modal from "@mui/material/Modal";
import { StyledBoxImgModal, StyledIconButton } from "./ModalStyles";
import CloseIcon from "@mui/icons-material/Close";
import s from "./Modal.module.css";
import userAvatar from "../../images/user.png";

interface IOpenImageModal {
  openModal: boolean;
  handleClosePhotoModal: () => void;
  photo: string;
}

const OpenImageModal: FC<IOpenImageModal> = ({ openModal, handleClosePhotoModal, photo }) => {
  return (
    <div>
      <Modal open={openModal} onClose={handleClosePhotoModal}>
        <StyledBoxImgModal>
          <StyledIconButton aria-label="close" onClick={handleClosePhotoModal}>
            <CloseIcon />
          </StyledIconButton>
          <img className={s.image} src={photo || userAvatar} alt="UserAvatar." />
        </StyledBoxImgModal>
      </Modal>
    </div>
  );
};

export default OpenImageModal;
