import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";

export const StyledStack = styled(Stack)(({ theme }) => ({
  height: "100vh",
  maxWidth: "400px",
  margin: "50px auto 0",
  marginLeft: "200px",
  [theme.breakpoints.down("lg")]: {
    marginLeft: "100px",
  },
  [theme.breakpoints.down("md")]: {
    margin: "50px auto 0",
  },
}));
