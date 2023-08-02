import { styled } from "@mui/system";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  width: "auto",
}));

export const StyledList = styled(List)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: 'center',
}));
