import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { watchDebounced } from "@vueuse/core";
import type { Product, Category, Params, FetchParams } from "../types/types";
import { apiProduct } from "../services/api";

export const useProductStore = defineStore("products", () => {
  const products = ref<Product[]>([]);
  const categories = ref<Category[]>([]);
  const currentProduct = ref<Product>();

  const params = ref<Params>({
    search: "",
    category: "",
    page: 0,
    limit: 20,
  });

  const isLoading = ref<boolean>(false);
  const error = ref<string | null>(null);
  const totalProducts = ref<number>(0);

  const totalPages = computed(() => {
    return Math.ceil(totalProducts.value / params.value.limit);
  });
  const hasPrevPage = computed(() => params.value.page > 0);
  const hasNextPage = computed(() => params.value.page < totalPages.value);

  watchDebounced(
    params,
    async () => {
      fetchProducts();
    },
    { debounce: 400 },
  );

  const fetchProducts = async () => {
    products.value = [];
    isLoading.value = true;
    error.value = null;

    try {
      let endpoint = "/";
      let queryParams: FetchParams = {};
      if (params.value.search) {
        endpoint = `/search?q=${encodeURIComponent(params.value.search)}`;
      } else if (params.value.category) {
        endpoint = `/category/${encodeURIComponent(params.value.category)}`;
      } else {
        queryParams = {
          limit: params.value.limit,
          skip: params.value.limit * params.value.page,
        };
      }
      const response = await apiProduct.get(endpoint, { params: queryParams });
      products.value = response.data.products;
      totalProducts.value = response.data.total;
    } catch (err) {
      error.value = (err as Error).message;
      products.value = [];
      console.log(error.value);
    } finally {
      isLoading.value = false;
    }
  };

  const prevPage = () => {
    if (hasPrevPage) {
      params.value = {
        category: "",
        search: "",
        page: params.value.page - 1,
        limit: 20,
      };
    }
  };
  const nextPage = () => {
    if (hasNextPage) {
      params.value = {
        category: "",
        search: "",
        page: params.value.page + 1,
        limit: 20,
      };
    }
  };

  const fetchCategories = async () => {
    params.value.page = 0;
    categories.value = [];
    error.value = null;
    try {
      const response = await apiProduct.get("/categories/");
      categories.value = response.data;
    } catch (err) {
      error.value = (err as Error).message;
      console.log(error.value);
    }
  };

  const fetchProduct = async (productId: number) => {
    try {
      const response = await apiProduct.get(`/${productId}`);
      currentProduct.value = response.data;
    } catch (err) {
      error.value = (err as Error).message;
      console.log(error.value);
    }
  };

  const setSearch = (query: string) => {
    params.value = {
      category: "",
      search: query,
      page: 0,
      limit: 20,
    };
  };
  const setCategory = (category: string) => {
    params.value = {
      category: category,
      search: "",
      page: 0,
      limit: 20,
    };
  };

  return {
    params,
    products,
    categories,
    isLoading,
    error,
    hasNextPage,
    hasPrevPage,
    nextPage,
    prevPage,
    fetchProducts,
    fetchCategories,
    fetchProduct,
    currentProduct,
    setSearch,
    setCategory,
  };
});
