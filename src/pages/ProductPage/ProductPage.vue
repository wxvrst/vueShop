<script setup lang="ts">
import { useProductStore } from "@/store/products";
import { useCartStore } from "@/store/cart";
import Button from "@/components/ui/Button.vue";
import ReviewCard from "@/components/ui/ReviewCard.vue";
import Modal from "@/components/ui/Modal.vue";
import SkeletonProductImage from "@/components/ui/SkeletonProductImage.vue";

const productStore = useProductStore();
const cartStore = useCartStore();
const route = useRoute();

const isModalOpen = ref<boolean>(false);
const modalImage = ref<string | null>(null);
const isScaled = ref<boolean>(false);
const toggleScale = () => {
	isScaled.value = !isScaled.value;
};
const handleToggleModal = (image?: string) => {
	isModalOpen.value = !isModalOpen.value;
	if (image) {
		modalImage.value = image;
	} else {
		modalImage.value = null;
	}
};
const currentProduct = computed(() => productStore.currentProduct);
const handleAddToCart = () => {
	if (currentProduct.value) {
		cartStore.addToCart(currentProduct.value);
	}
};
const handleOrderNow = () => {};
onMounted(() => {
	productStore.fetchProduct(Number(route.params.id));
});
</script>
<template>
	<section class="flex flex-col place-self-center">
		<div class="w-9/10 flex gap-4 py-2 text-left">
			<img
				:src="currentProduct?.thumbnail"
				:alt="currentProduct?.title"
				class="rounded-lg bg-gray-100"
			/>
			<div class="flex flex-col gap-2">
				<span class="font-semibold">
					{{ currentProduct?.title }}
					<span class="text-yellow-400">★ </span>
					{{ currentProduct?.rating }}
				</span>
				<span>
					Brand:
					<router-link
						to="/"
						class="border-b border-transparent hover:border-black cursor-pointer"
					>
						{{ currentProduct?.brand }}
					</router-link>
				</span>
				<span>
					Tags:
					<router-link
						v-for="(item, index) in currentProduct?.tags"
						to="/"
						:key="index"
						class="mr-2 border-b border-transparent not-last:after:content-[','] hover:border-black cursor-pointer"
					>
						{{ item }}
					</router-link>
				</span>
				<span> {{ currentProduct?.description }}</span>
			</div>
			<div class="flex flex-col gap-2 px-4 items-center h-fit">
				<span class="text-xl whitespace-nowrap">Want to order?</span>
				<Button @click="handleAddToCart">Add to cart</Button>
				<Button @click="handleOrderNow">Order now</Button>
			</div>
		</div>
		<span class="text-left text-2xl">More images:</span>
		<div class="border-b border-gray-200 my-2" />
		<div class="flex gap-2 relative">
			<SkeletonProductImage
				:isLoading="productStore.isLoading"
				:size="48"
				v-for="(image, index) in currentProduct?.images"
				:key="index"
			>
				<img
					:src="image"
					alt="currentProduct.title"
					class="w-48 bg-gray-100 rounded cursor-pointer"
					@click="handleToggleModal(image)"
				/>
			</SkeletonProductImage>
			<Modal :isOpen="isModalOpen" @close="handleToggleModal">
				<!-- Можно попробовать сделать по индексу и добавить предыдущая/следующая -->
				<img
					v-if="modalImage"
					:src="modalImage"
					alt="title"
					class="cursor-zoom-in flex bg-white/80 rounded-lg transition-transform duration-100"
					:class="{ 'scale-160 cursor-zoom-out': isScaled }"
					@click="toggleScale"
				/>
			</Modal>
		</div>
		<span class="text-left text-2xl">Reviews:</span>
		<div class="border-b border-gray-200 my-2" />
		<div class="flex gap-2">
			<ReviewCard
				v-for="(item, index) in currentProduct?.reviews"
				:review="item"
				:key="index"
			/>
		</div>
	</section>
</template>
