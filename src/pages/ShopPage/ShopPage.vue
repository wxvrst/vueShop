<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useProductStore } from "../../store/products";
import ProductCard from "../../components/ui/ProductCard.vue";
const productStore = useProductStore();

const search = ref<string>("");
const selectedCategory = ref<string>("");
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

onMounted(() => {
    productStore.fetchProducts();
    productStore.fetchCategories();
});
const handleSearch = (query: string) => {
    selectedCategory.value = "";
    productStore.setSearch(query);
};

const handleCategoryChange = (slug: string) => {
    search.value = "";
    if (selectedCategory.value != slug) {
        selectedCategory.value = slug;
    } else {
        selectedCategory.value = "";
    }
    productStore.setCategory(selectedCategory.value);
};
</script>
<template>
    <input
        placeholder="Search"
        ref="targetScroll"
        v-model="search"
        @input="handleSearch(search)"
        type="text"
        class="border border-[#9f9f9f] rounded-2xl py-2 px-8 w-1/3 outline-none focus:border-black my-6"
    />
    <div class="flex gap-2 overflow-x-scroll">
        <button
            v-for="(category, index) in productStore.categories"
            @click="handleCategoryChange(category.slug)"
            :key="index"
            class="border border-[#9f9f9f] rounded-4xl py-2 px-6 whitespace-nowrap cursor-pointer"
            :class="{
                'text-white bg-black transition-colors duration-400':
                    selectedCategory == category.slug,
            }"
        >
            {{ category.name }}
        </button>
    </div>
    <section class="grid grid-cols-4 gap-4">
        <p v-if="productStore.isLoading">Products loading...</p>
        <ProductCard
            v-for="product in productStore.products"
            :product="product"
            :key="product.id"
        ></ProductCard>
    </section>
    <div class="flex justify-center gap-48 mt-8">
        <button
            @click="prev"
            class="border rounded-4xl py-2 px-6 cursor-pointer disabled:border-[#9f9f9f] disabled:text-[#9f9f9f]"
            :disabled="!productStore.hasPrevPage"
        >
            Назад
        </button>
        <button
            @click="next"
            class="border rounded-4xl py-2 px-6 cursor-pointer disabled:border-[#9f9f9f] disabled:text-[#9f9f9f]"
            :disabled="!productStore.hasNextPage"
        >
            Вперёд
        </button>
    </div>
</template>
