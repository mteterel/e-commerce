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

  login(loginData) {
    return this.axios.post("/login_check", { ...loginData });
  }

  fetchMyUserInfo() {
    return this.axios.get("/user/me");
  }

  async fetchCategoryProducts(category) {
    return (await this.axios.get("/category/" + category)).data;
  }

  async fetchProductInfo(productId) {
    return (await this.axios.get("/product/" + productId)).data;
  }
}

export default new Api();
