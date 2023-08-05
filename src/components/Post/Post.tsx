import React, { FC } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
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
import { IPost, IProfile } from "../../types/types";
import { AppDispatch } from "../../redux/redux-store";
import { useDispatch } from "react-redux";
import { deletePostAC } from "../../redux/actions/profileActions";

interface IPostProps {
  item: IPost;
  profile: IProfile | null;
}

const Post: FC<IPostProps> = ({ item, profile }) => {
  const [selected, setSelected] = React.useState(false);

  const dispatch: AppDispatch = useDispatch();

  const onClickDelete = (postId: any) => {
    dispatch(deletePostAC(postId));
  };

  return (
    <Card sx={{ marginBottom: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} src={profile?.photos?.large || ""}>
            A
          </Avatar>
        }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={profile?.fullName}
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
        <IconButton
          aria-label="delete"
          onClick={() => onClickDelete(item.id)}
          sx={{ marginLeft: "auto" }}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
