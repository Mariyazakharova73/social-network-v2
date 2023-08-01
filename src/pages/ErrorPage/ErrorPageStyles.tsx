import { styled } from "@mui/system";
import Box from "@mui/material/Box";

export const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: "50vh",
  alignItems: "start",
  marginLeft: "250px",
  color: theme.palette.primary.main,
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 0,
  },
}));
