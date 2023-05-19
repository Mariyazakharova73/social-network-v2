import { updateNewPostTextActionCreator, addPostActionCreator } from "../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { profilePage: state.profileReducer };
};

// отправляет колбеки
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

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
