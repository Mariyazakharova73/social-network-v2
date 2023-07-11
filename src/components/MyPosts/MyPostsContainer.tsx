import { addPostActionCreator } from "../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { IPost } from "./../../types/types";

interface IMapStateProps {
  posts: Array<IPost>;
}

interface IMapDispatchProps {
  addPost: (post: string) => void;
}

interface IOwnProps {}

type PropsType = IMapStateProps & IMapDispatchProps & IOwnProps;

const mapStateToProps = (state: AppStateType):IMapStateProps  => {
  return { posts: state.profileReducer.posts };
};

// отправляет колбеки
const mapDispatchToProps = (dispatch: any) => {
  return {
    addPost: (newPostText: string) => {
      dispatch(addPostActionCreator(newPostText));
    },
  };
};

const MyPostsContainer = connect<IMapStateProps, IMapDispatchProps, IOwnProps, AppStateType>(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

// const MyPostsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();
//         const addPost = () => {
//           store.dispatch(addPostActionCreator());
//         };

//         const onPostChange = (text) => {
//           store.dispatch(updateNewPostTextActionCreator(text));
//         };
//         return (
//           <MyPosts
//             updateNewPostText={onPostChange}
//             addPost={addPost}
//             profilePage={state.profileReducer}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };
