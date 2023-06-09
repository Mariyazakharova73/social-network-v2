import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import {
  updateNewMessageBodyActionCreator,
  sendMessageActionCreator,
} from "../../redux/dialogsReducer";

// отправляет данные
const mapStateToProps = (state) => {
  return { dialogsPage: state.dialogsReducer, isAuth: state.authReducer.isAuth };
};

// отправляет колбеки
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyActionCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs); // connect создает контейнерную компоненту.
// Внутри она рендерит презентационную компоненту, свойства передаются через функции.

export default DialogsContainer;

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
