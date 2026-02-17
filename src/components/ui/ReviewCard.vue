<script setup lang="ts">
import type { Review } from "@/types/types";
const props = defineProps<{
    review: Review;
}>();
</script>
<template>
    <div class="flex-col max-w-58 gap-2 bg-gray-100 rounded p-2 text-left">
        <span v-for="index in 5" :key="index">
            <span
                class="text-gray-400"
                :class="{ 'text-yellow-400': index < review.rating }"
            >
                ★
            </span>
        </span>
        <div>{{ review.reviewerName }} {{ review.date.split("T")[0] }}</div>
        <div class="text-wrap">{{ review.comment }}</div>
    </div>
</template>
