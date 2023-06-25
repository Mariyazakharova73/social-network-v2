import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { MuiFileInput } from "mui-file-input";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

const BasicModal = ({ handleCloseModal, openModal }) => {
  const [file, setFile] = React.useState(null);

  const handleChange = (newFile) => {
    setFile(newFile);
  };
  return (
    <div>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Загрузка новой фотографии
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Вы можете загрузить изображение в формате jpg, gif или png.
          </Typography>
          <MuiFileInput sx={{ mt: 2 }} value={file} onChange={handleChange} />
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
