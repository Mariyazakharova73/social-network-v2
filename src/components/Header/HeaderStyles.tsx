import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";

export const StyledTypographyMobile = styled(Typography)(({ theme}) => ({
  display: "none",
  marginRight: "2px",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
  flexGrow: 1,
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  display: "flex",
  marginRight: "2px",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
  flexGrow: 1,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
