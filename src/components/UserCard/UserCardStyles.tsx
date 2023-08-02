import { styled } from "@mui/system";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";

export const StyledCard = styled(Card)(({ theme }) => ({
  width: "250px",
  [theme.breakpoints.down("md")]: {
    width: "200px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "300px",
  },
}));

export const StyledCardActions = styled(CardActions)(({ theme }) => ({
  gap: "10px",
  justifyContent: "center",
}));
