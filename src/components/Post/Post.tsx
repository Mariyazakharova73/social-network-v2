import React, { FC } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
import { avatar } from "../../utils/constants";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import { IPost } from "../../types/types";

interface IPostProps {
  item: IPost;
}

const Post: FC<IPostProps> = ({ item }) => {
  const [selected, setSelected] = React.useState(false);

  return (
    <Card sx={{ marginBottom: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={avatar}>
            M
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Мария З."
        subheader={item.date}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.message}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography>{selected ? item.likesCount + 1 : item.likesCount}</Typography>
        <Checkbox
          icon={<FavoriteBorder />}
          checked={selected}
          onChange={() => {
            setSelected(!selected);
          }}
          checkedIcon={<Favorite />}
        />
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="delete" sx={{ marginLeft: "auto" }}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
