<script setup lang="ts">
</script>
<template>
    <section class="flex flex-col gap-8 items-center">
        <div class="flex flex-col gap-4 items-center">
            <span class="text-6xl">
                Shop our latest offers and categories
            </span>
            <span class="w-1/2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor.
                Faucibus morbi turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
        </div>
        <div class="flex gap-4 max-h-200 w-full">
            <div class="flex flex-col gap-4 w-1/2">
                <div class="flex flex-col text-end shadow-2xl px-8 cursor-pointer hover:shadow-xl rounded-xl">
                    <img src="../../../assets/category_1.svg" alt="category" class="w-fit">
                    <span>Laptops</span>
                    <span class="text-4xl">
                        True laptops<br> solution
                    </span>
                </div>
                <div
                    class="flex text-end shadow-2xl px-8 min-h-0 items-center cursor-pointer hover:shadow-xl rounded-xl">
                    <img src="../../../assets/category_2.svg" alt="category">
                    <div class="flex flex-col">
                        <span>Watch</span>
                        <span class="text-4xl">
                            Not just stylish
                        </span>
                    </div>
                </div>
            </div>
            <div
                class="w-[312px] shadow-2xl flex flex-col gap-4 justify-center cursor-pointer hover:shadow-xl rounded-xl">
                <img src="../../../assets/category_3.svg" alt="category">
                <div class="flex flex-col">
                    <span>Phones</span>
                    <span class="text-4xl">
                        Your day to day<br> life
                    </span>
                </div>
            </div>
            <div
                class="w-[312px] shadow-2xl flex flex-col gap-4 justify-center cursor-pointer hover:shadow-xl rounded-xl">
                <div class="flex flex-col">
                    <span>Tablet</span>
                    <span class="text-4xl">
                        Empower your work
                    </span>
                </div>
                <img src="../../../assets/category_4.svg" alt="category">
            </div>
        </div>
    </section>
</template>