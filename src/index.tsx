import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/app/app";

import { Provider } from "react-redux";
import { setupStore } from "./store";
import "./index.css";

const store = setupStore();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
