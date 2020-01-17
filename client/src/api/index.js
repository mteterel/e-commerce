import axios from "axios";

class ApiService {
  constructor() {
    this.client = axios.create({ baseURL: "https://localhost:8000" });
    this.authoriationToken = null;
  }

  setAuthorizationToken(token) {
    this.authoriationToken = token;
  }

  fetchProductsFromCategory(categoryId) {
      return this.client.get("/categories/" + categoryId + "/products")
  }

  fetchFiltersFromCategory(categoryId) {
    return this.client.get("/categories/" + categoryId + "/filters")
  }

  fetchProductInfos(productId) {
    return this.client.get("/products/" + productId);
  }
}

export default new ApiService();
