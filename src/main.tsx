import ReactDOM from "react-dom/client";
import AppRouter from "./router/AppRouter";

// FIXME: Redux Toolkit
import { Provider } from "react-redux";
import store from "@store/index";
// FIXME: styles bootstrap
/* The following line can be included in your src/index.js or App.js file */
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
