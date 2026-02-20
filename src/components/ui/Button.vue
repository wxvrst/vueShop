<script setup lang="ts">
const emit = defineEmits<{
	click: [];
}>();
</script>
<template>
	<button
		@click.stop.prevent="emit('click')"
		class="border py-1 px-4 rounded-lg hover:bg-black hover:text-white transition-colors duration-400 text-nowrap active:animate-ping active:scale-60 w-fit disabled:pointer-events-none disabled:border-gray-400 disabled: disabled:text-gray-400"
	>
		<slot>Click!</slot>
	</button>
</template>

