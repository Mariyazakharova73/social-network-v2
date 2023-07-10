import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../HOC/withAuthRedirectComponent";
import { sendMessageActionCreator } from "../../redux/dialogsReducer";
import { compose } from "redux";
import { AppStateType } from "../../redux/redux-store";
import { FC } from 'react';

// отправляет данные
const mapStateToProps = (state: AppStateType) => {
  return { dialogsPage: state.dialogsReducer };
};

// отправляет колбеки
const mapDispatchToProps = (dispatch: any) => {
  return {
    sendMessage: (newMessageBody: string) => {
      dispatch(sendMessageActionCreator(newMessageBody));
    },
  };
};

export default compose<FC>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);

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
