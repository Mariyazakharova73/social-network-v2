import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";

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
