import { addPostAC } from "../../redux/actions/profileActions";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { IPost } from "./../../types/types";
import { IAddPostAction } from "../../redux/types/profileTypes";

interface IMapStateProps {
  posts: Array<IPost>;
}

interface IMapDispatchProps {
  addPost: (post: string) => void;
}

interface IOwnProps {}

type PropsType = IMapStateProps & IMapDispatchProps & IOwnProps;

const mapStateToProps = (state: AppStateType): IMapStateProps => {
  return { posts: state.profileReducer.posts };
};

// отправляет колбеки
const mapDispatchToProps = (dispatch: (arg0: IAddPostAction) => void) => {
  return {
    addPost: (newPostText: string) => {
      dispatch(addPostAC(newPostText));
    },
  };
};

const MyPostsContainer = connect<IMapStateProps, IMapDispatchProps, IOwnProps, AppStateType>(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

export default MyPostsContainer;
