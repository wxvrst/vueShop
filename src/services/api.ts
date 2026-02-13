import axios from "axios";

const apiProduct = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/products`,
});
const apiUser = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/users`,
});
export { apiProduct, apiUser };
