import React, { FC } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

interface IPreloaderProps {
  initialized: boolean;
}

const Preloader: FC<IPreloaderProps> = ({ initialized }) => {
  return (
    <Backdrop
      open={!initialized}
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Preloader;
