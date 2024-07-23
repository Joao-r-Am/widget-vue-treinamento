import axios from "axios";
import FeedbacksService from "./feedbacks";

const API_ENVS: any = {
  production: "backend-dashboard-jade.vercel.app/",
  development: "",
  local: "http://localhost:3000",
};

const httpClient = axios.create({
  baseURL: API_ENVS[process.env.NODE_ENV] || API_ENVS.local,
});

httpClient.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    const canThrowAnError =
      error.request.status === 0 || error.request.status === 500;
    if (canThrowAnError) {
      throw new Error(error.message);
    }
    return error;
  }
);

export default {
  feedbacks: FeedbacksService(httpClient),
};
