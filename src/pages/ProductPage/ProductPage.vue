<script setup lang="ts">
import { onMounted } from "vue";
import { useProductStore } from "../../store/products";
import { useRoute } from "vue-router";
const productStore = useProductStore();
const route = useRoute();

onMounted(() => {
    productStore.fetchProduct(Number(route.params.id));
});
</script>
<template></template>
