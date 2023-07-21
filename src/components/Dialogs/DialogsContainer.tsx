import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { sendMessageActionCreator } from "../../redux/actions/dialogsActions";
import { compose } from "redux";
import { AppStateType } from "../../redux/redux-store";
import { ISendMessageAction } from "../../redux/types/dialogsTypes";

const mapStateToProps = (state: AppStateType) => {
  return { dialogsPage: state.dialogsReducer };
};

const mapDispatchToProps = (dispatch: (arg0: ISendMessageAction) => void) => {
  return {
    sendMessage: (newMessageBody: string) => {
      dispatch(sendMessageActionCreator(newMessageBody));
    },
  };
};

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
