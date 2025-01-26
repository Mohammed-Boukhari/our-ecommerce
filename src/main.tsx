import ReactDOM from "react-dom/client";
import AppRouter from "./router/AppRouter";
// FIXME: Axios
import "./services/axios-global.js";

// FIXME: Redux Toolkit
import { Provider } from "react-redux";
import { store, persister } from "@store/index";
import { PersistGate } from "redux-persist/integration/react";

// FIXME: styles bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persister}>
      <AppRouter />
    </PersistGate>
  </Provider>
);
