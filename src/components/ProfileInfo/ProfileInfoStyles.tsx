import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";

export const StyledStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));
