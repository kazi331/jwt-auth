import { serverURI } from "@/lib/utils";
import axios from "axios";

export default axios.create({
  baseURL: serverURI,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
