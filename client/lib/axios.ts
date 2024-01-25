import axios from "axios";
import { serverURI } from "./utils";
export default axios.create({
  baseURL: serverURI,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});
