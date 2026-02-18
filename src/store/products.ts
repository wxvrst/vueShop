import { watchDebounced } from "@vueuse/core";
import type { Product, Category, Params, FetchParams } from "@/types/types";
import { apiProduct } from "@/services/api";

export const useProductStore = defineStore(
	"products",
	() => {
		const products = ref<Product[]>([]);
		const categories = ref<Category[]>([]);
		const currentProduct = ref<Product | null>();
		const initialParams: Params = {
			search: "",
			category: "",
			page: 0,
			limit: 20,
			sortBy: "title",
			order: "asc",
		};
		const params = ref<Params>(initialParams);

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
			{ debounce: 200 },
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
						sortBy: params.value.sortBy,
						order: params.value.order,
					};
				}
				const response = await apiProduct.get(endpoint, {
					params: queryParams,
				});
				products.value = response.data.products;
				totalProducts.value = response.data.total;

				// Для более симпатичной подгрузки ?
				// await new Promise((resolve) => setTimeout(resolve, 250));
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
					...params.value,
					page: params.value.page - 1,
				};
			}
		};
		const nextPage = () => {
			if (hasNextPage) {
				params.value = {
					...params.value,
					page: params.value.page + 1,
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
				isLoading.value = true;
				const response = await apiProduct.get(`/${productId}`);
				await new Promise((resolve) => setTimeout(resolve, 800));
				currentProduct.value = response.data;
			} catch (err) {
				error.value = (err as Error).message;
				console.log(error.value);
			} finally {
				isLoading.value = false;
			}
		};

		const setSearch = (query: string) => {
			params.value = {
				...params.value,
				category: "",
				search: query,
				page: 0,
				sortBy: "title",
				order: "asc",
			};
		};

		const setCategory = (category: string) => {
			params.value = {
				...params.value,
				category: category,
				search: "",
				page: 0,
				sortBy: "title",
				order: "asc",
			};
		};
		const setSortBy = (sortBy: string, order: "desc" | "asc") => {
			params.value = {
				...params.value,
				category: "",
				search: "",
				page: 0,
				sortBy: sortBy,
				order: order,
			};
		};
		const setParamsToInitial = () => {
			params.value = initialParams;
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
			setSortBy,
			setParamsToInitial,
		};
	},
	{
		persist: {
			pick: ["params", "currentProduct"],
			storage: sessionStorage,
			key: "product-params",
		},
	},
);
