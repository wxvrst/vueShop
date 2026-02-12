import axios from "axios";

const apiProduct = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/products`,
});
export default apiProduct;
