/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import "../src/app/layout/styles.css";
import reportWebVitals from "./reportWebVitals";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/Routes";
import { Provider } from "react-redux";
import { store } from "./app/store/configureStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);



// AM RAMAS LA :
//        97. Using entity adapter selectors 0:00 / 5:29
//        97. Using entity adapter selectors 0:00 / 5:29
//        97. Using entity adapter selectors 0:00 / 5:29
//        97. Using entity adapter selectors 0:00 / 5:29
//        97. Using entity adapter selectors 0:00 / 5:29
//        97. Using entity adapter selectors 0:00 / 5:29
//        97. Using entity adapter selectors 0:00 / 5:29

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
