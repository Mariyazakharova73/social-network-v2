import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
import avatar from "../../images/image.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ToggleButton from "@mui/material/ToggleButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const Post = ({ item }) => {
  const [selected, setSelected] = React.useState(false);
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar alt="Cat" src={avatar} />
      </ListItemAvatar>
      <ListItemText primary="Мария З." secondary={item.message} />
      <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
        <Typography>{selected ? item.likesCount + 1 : item.likesCount}</Typography>
        <ToggleButton
          color="error"
          
          size="small"
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          <FavoriteIcon />
        </ToggleButton>
      </Stack>
    </ListItem>
  );
};

export default Post;
