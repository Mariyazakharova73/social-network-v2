import { styled } from "@mui/system";
import Box from "@mui/material/Box";

export const StyledBox = styled(Box)(({ theme }) => ({
  position: "fixed",
  width: 250,
  [theme.breakpoints.down("lg")]: {
    width: 200,
  },
  [theme.breakpoints.down("md")]: {
    position: "static",
    width: "100%",
  },
}));
