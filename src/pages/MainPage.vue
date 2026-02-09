<script setup lang="ts">
import CarouselBlock from '../components/CarouselBlock.vue';
import LatestOffers from '../components/LatestOffers.vue';
import MostSelled from '../components/MostSelled.vue';
import BestCategories from '../components/BestCategories.vue';
import IdeasBlock from '../components/IdeasBlock.vue';
import AddictiveSearchBlock from '../components/AddictiveSearchBlock.vue';
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