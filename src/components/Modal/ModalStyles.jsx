import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

export const StyledBoxforModal = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  backgroundColor: theme.palette.common.white,
  padding: 30,
  borderRadius: 20,
}));

export const StyledBoxImgModal = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: 20,
  background: "transparent",
}));

export const StyledIconButton = styled(Box)(({ theme }) => ({
  marginLeft: "auto",
  transform: "translate(10px, 5px)",
  color: "white",
}));
