import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "./../../HOC/withAuthRedirectComponent";
import { sendMessageActionCreator } from "../../redux/dialogsReducer";
import { compose } from "redux";

// отправляет данные
const mapStateToProps = (state) => {
  return { dialogsPage: state.dialogsReducer };
};

// отправляет колбеки
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageActionCreator(newMessageBody));
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);

// const DialogsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();
//         const onSendMessageClick = () => {
//           store.dispatch(sendMessageActionCreator());
//         };

//         const onNewMessageChange = (body) => {
//           store.dispatch(updateNewMessageBodyActionCreator(body));
//         };
//         return (
//           <Dialogs
//             updateNewMessageBody={onNewMessageChange}
//             sendMessage={onSendMessageClick}
//             dialogsPage={state.dialogsReducer}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };
