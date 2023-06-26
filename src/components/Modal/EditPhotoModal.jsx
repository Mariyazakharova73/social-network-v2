import * as React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { MuiFileInput } from "mui-file-input";
import { StyledBoxforModal } from './ModalStyles';

const EditPhotoModal = ({ handleCloseModal, openModal, savePhoto }) => {
  const [file, setFile] = React.useState(null);

  const handleChange = (newFile) => {
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
            Загрузка новой фотографии
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Вы можете загрузить изображение в формате jpg или png.
          </Typography>
          <MuiFileInput sx={{ mt: 2 }} value={file} onChange={handleChange} />
        </StyledBoxforModal>
      </Modal>
    </div>
  );
};

export default EditPhotoModal;
