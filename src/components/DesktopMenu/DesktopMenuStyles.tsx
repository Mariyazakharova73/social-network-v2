import { styled } from "@mui/system";
import Box from "@mui/material/Box";

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "block",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
