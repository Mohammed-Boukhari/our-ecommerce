import ReactDOM from "react-dom/client";
import AppRouter from "./router/AppRouter";

/* The following line can be included in your src/index.js or App.js file */
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(<AppRouter />);
