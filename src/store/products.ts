import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Product, Category } from "../types/types";
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
export const useProductStore = defineStore("products", () => {
	const products = ref<Product[]>([]);
	const categories = ref<Category[]>([]);
	const searchResult = ref<Product[]>([]);
	//searchResult как переменную внутри fetch
	const search = ref<string>("");
	const isLoading = ref<boolean>(false);
	// const error = ref<string>("");

	//Объединить параметры в один объект, search, category в params, и сразу их брать в компонентах, а не создавать локальные
	//axios добавить
	//пересмотреть места строк, импорты компьютеды и тд
	//Динамический import
	//дебаунс

	//FSD архитектура

	//Pagination
	const pageSize = ref<number>(20);
	const currentPage = ref<number>(0);
	const totalProducts = ref<number>(0);

	const totalPages = computed(() => {
		return Math.ceil(totalProducts.value / pageSize.value);
	});
	const hasPrevPage = computed(() => currentPage.value > 0);
	const hasNextPage = computed(() => currentPage.value < totalPages.value);

	const fetchProducts = async (
		page: number = currentPage.value,
		limit: number = pageSize.value,
	) => {
		products.value = [];
		isLoading.value = true;
		try {
			const skip = page * limit;
			const responce = await fetch(
				`${apiBaseUrl}/products/?limit=${limit}&skip=${skip}`,
			);
			if (!responce.ok) throw new Error("Api answer error");
			const data = await responce.json();
			products.value = data.products;
			totalProducts.value = data.total;
			currentPage.value = page;
		} catch (err) {
			console.error(err);
		} finally {
			isLoading.value = false;
		}
	};
	const nextPage = () => {
		if (hasNextPage) {
			fetchProducts(currentPage.value + 1);
		}
	};
	const prevPage = () => {
		if (hasPrevPage) {
			fetchProducts(currentPage.value - 1);
		}
	};

	const fetchCategories = async () => {
		currentPage.value = 0;
		categories.value = [];
		try {
			const responce = await fetch(`${apiBaseUrl}/products/categories`);
			if (!responce.ok) throw new Error("Api answer error");
			const data = await responce.json();
			categories.value = data;
		} catch (err) {
			console.error(err);
		}
	};

	const searchProducts = async (query: string) => {
		search.value = "";
		if (!query) {
			searchResult.value = [];
			return;
		}
		search.value = query;
		try {
			const responce = await fetch(
				`${apiBaseUrl}/products/search?q=${encodeURIComponent(query)}`,
			);
			if (!responce.ok) throw new Error("Api answer error");
			const data = await responce.json();
			searchResult.value = data.products;
		} catch (err) {
			console.error(err);
			searchResult.value = [];
		}
	};
	const searchCategory = async (category: string) => {
		search.value = "";
		isLoading.value = true;
		if (!category) {
			searchResult.value = [];
			return;
		}
		search.value = category;
		try {
			const responce = await fetch(
				`${apiBaseUrl}/products/category/${encodeURIComponent(category)}`,
			);
			if (!responce.ok) throw new Error("Api answer error");
			const data = await responce.json();
			searchResult.value = data.products;
		} catch (err) {
			console.error(err);
			searchResult.value = [];
		} finally {
			isLoading.value = false;
		}
	};

	const currentProducts = computed(() => {
		return search.value ? searchResult.value : products.value;
	});

	return {
		products,
		searchResult,
		categories,
		isLoading,
		currentProducts,
		hasNextPage,
		hasPrevPage,
		nextPage,
		prevPage,
		searchCategory,
		fetchProducts,
		fetchCategories,
		searchProducts,
	};
});
