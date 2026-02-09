<script setup lang="ts">
import { ref } from 'vue';
const current = ref(0)
const prev = () => {
    current.value--;
}
const next = () => {
    current.value++;
}
const explore=()=>{

}
</script>
<template>
    <section class="bg-[#DCE5E2] rounded-xl flex justify-between h-132 px-2 mt-6">
        <button @click=prev class="cursor-pointer">
            <img src="../assets/arrow.svg" alt="arrow" class="w-6">
        </button>
        <div
            class="flex flex-col gap-6 justify-center text-left mx-6"
        >
            <span
            class="text-6xl"
            >
            The new phones are here take a look.
            </span>
            <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis.
            </span>
            <button @click=explore
                class="border rounded-4xl w-fit py-2 px-8 cursor-pointer"
            >
                Explore
            </button>
        </div>
        <img src="../assets/carousel_1.svg">
        <button @click=next class="cursor-pointer">
            <img src="../assets/arrow.svg" alt="arrow"
            class="transform -scale-x-100 w-6"
            >
        </button>
    </section>
</template>