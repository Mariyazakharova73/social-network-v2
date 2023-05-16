import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import state, { addPost, subscribe } from "./redux/state";

let rerender = (state) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          postsData={state.profilePage}
          dialogsData={state.dialogsPage.dialogs}
          messagesData={state.dialogsPage.messages}
          addPost={addPost}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};

rerender(state);

subscribe(rerender);

reportWebVitals();
