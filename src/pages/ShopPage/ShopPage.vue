<script setup lang="ts">
import { useProductStore } from "@/store/products";
import ProductCard from "@/components/ui/ProductCard.vue";
import Button from "@/components/ui/Button.vue";
import type { SortByList } from "@/types/types";

const productStore = useProductStore();

const search = ref<string>("");
const selectedCategory = ref<string>("");
const initialSort: SortByList = {
    name: "By title",
    sort: "title",
    order: "asc",
};
const selectedSort = ref<SortByList>(initialSort);

const sortByList = ref<SortByList[]>([
    {
        name: "By rating ↓",
        sort: "rating",
        order: "desc",
    },
    {
        name: "By rating ↑",
        sort: "rating",
        order: "asc",
    },
    {
        name: "By price ↓",
        sort: "price",
        order: "desc",
    },
    {
        name: "By price ↑",
        sort: "price",
        order: "asc",
    },
]);

const prev = () => {
    productStore.prevPage();
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, 400);
};
const next = () => {
    productStore.nextPage();
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, 400);
};

const handleSearch = (query: string) => {
    selectedCategory.value = "";
    selectedSort.value = initialSort;
    productStore.setSearch(query);
};

const handleCategoryChange = (slug: string) => {
    search.value = "";
    selectedSort.value = initialSort;
    if (selectedCategory.value != slug) {
        selectedCategory.value = slug;
    } else {
        selectedCategory.value = "";
    }
    productStore.setCategory(selectedCategory.value);
};
const handleSortChange = (sort: SortByList) => {
    search.value = "";
    selectedCategory.value = "";
    if (selectedSort.value != sort) {
        selectedSort.value = sort;
    } else {
        selectedSort.value = initialSort;
    }
    productStore.setSortBy(selectedSort.value.sort, selectedSort.value.order);
};

onMounted(() => {
    productStore.fetchProducts();
    productStore.fetchCategories();
});
</script>
<template>
    <input
        placeholder="Search"
        ref="targetScroll"
        v-model="search"
        @input="handleSearch(search)"
        type="text"
        class="border border-gray-400 rounded-2xl py-2 px-8 w-1/3 outline-none focus:border-black mb-6"
    />
    <div class="flex gap-2 overflow-x-scroll">
        <button
            v-for="(category, index) in productStore.categories"
            @click="handleCategoryChange(category.slug)"
            :key="index"
            class="border border-gray-400 rounded-4xl py-2 px-6 whitespace-nowrap cursor-pointer"
            :class="{
                'text-white bg-black transition-colors duration-400':
                    selectedCategory == category.slug,
            }"
        >
            {{ category.name }}
        </button>
    </div>
    <div class="flex gap-2 justify-center mb-6">
        <button
            v-for="(sort, index) in sortByList"
            @click="handleSortChange(sort)"
            :key="index"
            class="border border-gray-400 rounded-4xl py-2 px-6 whitespace-nowrap cursor-pointer"
            :class="{
                'text-white bg-black transition-colors duration-400':
                    selectedSort === sort,
            }"
        >
            {{ sort.name }}
        </button>
    </div>
    <img
        v-if="productStore.isLoading"
        src="@/public/progress_activity_icon.svg"
        alt="loading icon"
        class="py-4 mx-auto w-36 animate-spin"
    />
    <section
        v-else
        class="grid grid-cols-5 gap-4 transition-transform duration-400"
    >
        <ProductCard
            v-for="product in productStore.products"
            :product="product"
            :key="product.id"
        />
    </section>
    <div class="flex justify-center gap-48 mt-8">
        <Button
            @click="prev"
            class="disabled:border-gray-400 disabled:text-gray-400"
            :disabled="!productStore.hasPrevPage"
        >
            Назад
        </Button>
        <Button
            @click="next"
            class="disabled:border-gray-400 disabled:text-gray-400"
            :disabled="!productStore.hasNextPage"
        >
            Вперёд
        </Button>
    </div>
</template>
