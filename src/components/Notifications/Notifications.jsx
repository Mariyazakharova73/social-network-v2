import React from "react";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Notifications = ({ text, open, handleClose,  }) => {
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
