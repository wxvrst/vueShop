<script setup lang="ts">
const emit = defineEmits<{
    click: [];
}>();
</script>
<template>
    <button
        @click.stop.prevent="emit('click')"
        class="border py-1 px-4 rounded-lg hover:bg-black hover:text-white transition-colors duration-400 active:animate-ping active:scale-60"
    >
        <slot>Click!</slot>
    </button>
</template>
