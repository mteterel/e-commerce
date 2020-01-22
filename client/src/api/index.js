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

  signUp(email, password, firstname, lastname) {
    return this.client.post("/register", {
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname
    });
  }

  login(email, password) {
    return this.client.post("/api/login_check", {
      email: email,
      password: password
    });
  }

  fetchCategoryList() {
    return this.client.get("/categories/");
  }

  fetchProductsFromCategory(categoryId) {
    return this.client.get(`/categories/${categoryId}/products`);
  }

  fetchFiltersFromCategory(categoryId) {
    return this.client.get(`/categories/${categoryId}/filters`);
  }

  fetchProductInfos(productId) {
    return this.client.get(`/products/${productId}`);
  }

  fetchCheckoutResult(orderId) {
    return this.client.get(`/orders/${orderId}/result`);
  }

  initiateTransaction(items, paymentMethod) {
    return this.client.post(`/orders/`, {
      orderProducts: items,
      paymentMethod: paymentMethod
    });
  }
}

export default new ApiService();
