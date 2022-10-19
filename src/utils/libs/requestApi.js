import { BASE_URL, HEADER } from "../../config.json"
import axios from "axios";

const RequestApi = (p) => {
  try {
    const res = axios({
      method: p.method,
      baseURL: BASE_URL,
      url: p.url,
      headers: HEADER,
      data: p.data,
    });
    return res;
  } catch (error) {
    throw error;
  }
};

export default RequestApi;