import React, { FC, SyntheticEvent } from "react";
import { Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface INotifications {
  text: string;
  open: boolean;
  handleClose: (e: SyntheticEvent | Event, reason?: string) => void;
}

const Notifications: FC<INotifications> = ({ text, open, handleClose }) => {
  return (
    <Snackbar
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        {text}
      </Alert>
    </Snackbar>
  );
};

export default Notifications;
