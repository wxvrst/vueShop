<script setup lang="ts">
const props = defineProps<{
	isLoading: boolean;
}>();
</script>
<template>
	<div class="w-48 h-48">
		<div v-if="!isLoading">
			<slot />
		</div>
		<div v-else class="w-full h-full rounded bg-black/60 animate-pulse" />
	</div>
</template>
