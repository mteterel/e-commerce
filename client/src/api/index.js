import axios from "axios";

class ApiService {
  constructor() {
    this.client = axios.create({ baseURL: "https://localhost:8000" });
    this.authorizationToken = null;
  }

  setAuthorizationToken(token) {
    this.authorizationToken = token;
    axios.defaults.headers.common["Authorization"] = token
      ? "Bearer " + token
      : null;
  }

  login(email, password) {
    return this.client.post("/api/login_check", {
      email: email,
      password: password
    });
  }

  fetchProductsFromCategory(categoryId) {
    return this.client.get("/categories/" + categoryId + "/products");
  }

  fetchFiltersFromCategory(categoryId) {
    return this.client.get("/categories/" + categoryId + "/filters");
  }

  fetchProductInfos(productId) {
    return this.client.get("/products/" + productId);
  }
}

export default new ApiService();
