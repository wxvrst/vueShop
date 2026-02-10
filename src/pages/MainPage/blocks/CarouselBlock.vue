<script setup lang="ts">
import { ref } from 'vue';
import image1 from '../../../assets/carousel_1.svg'
const items = [
    {
        title: 'The new phone a here, take a look!',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.',
        url: '/',
        image: image1,
    },
    // {
    //     title: 'The new phone a here, take a look!',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.',
    //     url: '/',
    //     image: image1,
    // },
    // {
    //     title: 'The new phone a here, take a look!',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.',
    //     url: '/',
    //     image: image1,
    // },
]
const current = ref(0)
const prev = () => {
    if (current.value == 0) { current.value = 2 }
    else { current.value--; }
}
const next = () => {
    if (current.value == 2) { current.value = 0 }
    else { current.value++; }
}


</script>
<template>
    <section class="bg-[#DCE5E2] rounded-xl flex justify-between h-132 px-2 mt-6">
        <button @click=prev class="cursor-pointer">
            <img src="../../../assets/arrow.svg" alt="arrow" class="w-6">
        </button>

        <div v-for="(item, index) in items" :key="index" class="flex text-left mx-6">
            <div class="flex flex-col justify-center gap-6">
                <span class="text-6xl">
                    {{ item.title }}
                </span>
                <span>
                    {{ item.description }}
                </span>
                <button @click=$router.push(item.url) class="border rounded-4xl w-fit py-2 px-8 cursor-pointer">
                    Explore
                </button>
            </div>
            <img :src="item.image" :alt="item.title" class="w-fit">
        </div>


        <button @click=next class="cursor-pointer">
            <img src="../../../assets/arrow.svg" alt="arrow" class="transform -scale-x-100 w-6">
        </button>
    </section>
</template>