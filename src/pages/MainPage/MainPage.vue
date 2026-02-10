<script setup lang="ts">
import CarouselBlock from './blocks/CarouselBlock.vue';
import LatestOffers from './blocks/LatestOffers.vue';
import MostSelled from './blocks/MostSelled.vue';
import BestCategories from './blocks/BestCategories.vue';
import IdeasBlock from './blocks/IdeasBlock.vue';
import AddictiveSearchBlock from './blocks/AddictiveSearchBlock.vue';
</script>
<template>
    <main 
        class="flex flex-col gap-16"
    >
        <CarouselBlock></CarouselBlock>
        <LatestOffers></LatestOffers>
        <MostSelled></MostSelled>
        <BestCategories></BestCategories>
        <IdeasBlock></IdeasBlock>
        <AddictiveSearchBlock></AddictiveSearchBlock>
    </main>
</template>