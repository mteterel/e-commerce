import axios from "axios";

class Api {
  constructor() {
    this.axios = axios.create({
      baseURL: "https://localhost:8000/api"
    });
  }

  setAuthorizationToken(token) {
    this.axios.defaults.headers["Authorization"] = "Bearer " + token;
  }

  login(data) {
    return this.axios.post("/login_check", { ...data });
  }
}

export default new Api();
