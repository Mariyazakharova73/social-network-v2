import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import ForestTwoToneIcon from "@mui/icons-material/ForestTwoTone";
import Box from "@mui/material/Box";

interface TypographyProps {
  component: string;
  href: string;
  noWrap: boolean;
  variant: string;
}

interface TypographyMobileProps {
  component: string;
  href: string;
  noWrap: boolean;
  variant: string;
}

export const StyledTypographyMobile = styled(Typography)<TypographyMobileProps>(({ theme }) => ({
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

export const StyledTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
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

// sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
export const StyledIconDesktop = styled(ForestTwoToneIcon)(({ theme }) => ({
  display: "flex",
  marginRight: "8px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const StyledBoxMobile = styled(Box)(({ theme }) => ({
  display: "none",
  flexGrow: 1,
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));

export const StyledIconMobile = styled(ForestTwoToneIcon)(({ theme }) => ({
  display: "none",
  marginRight: "8px",
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));
