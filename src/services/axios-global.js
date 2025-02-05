// FIXME: configure axios globally to use the base URL for the back-end server
import axios from "axios";
const url = "http://localhost:5005";
axios.defaults.baseURL = url;
