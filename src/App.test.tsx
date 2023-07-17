import React from "react";
import { MainApp } from "./App";
import { createRoot } from "react-dom/client";

// it("render without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<MainApp />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test("renders without crashing", () => {
  const container = document.createElement("div");
  const root = createRoot(container);
  root.render(<MainApp />);
  root.unmount();
});
