import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { MuiFileInput } from "mui-file-input";
import { StyledBoxforModal } from "./ModalStyles";
import { useTranslation } from "react-i18next";

interface IEditPhotoModal {
  openModal: boolean;
  savePhoto: (file: any) => void;
  handleCloseModal: () => void;
}

const EditPhotoModal: FC<IEditPhotoModal> = ({ openModal, savePhoto, handleCloseModal }) => {
  const { t } = useTranslation();
  const [file, setFile] = React.useState(null);

  const handleChange = (newFile: any) => {
    setFile(newFile);
    savePhoto(newFile);
    setTimeout(() => {
      handleCloseModal();
    }, 2000);
  };
  return (
    <div>
      <Modal open={openModal} onClose={handleCloseModal}>
        <StyledBoxforModal>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {t("photoUpload")}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {t("photoFormat")}
          </Typography>
          <MuiFileInput sx={{ mt: 2 }} value={file} onChange={handleChange} />
        </StyledBoxforModal>
      </Modal>
    </div>
  );
};

export default EditPhotoModal;
