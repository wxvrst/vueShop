<script setup lang="ts">
const props = defineProps<{
    isOpen: boolean;
    image?: string;
}>();
const emit = defineEmits<{
    close: [];
}>();
</script>
<template>
    <div
        v-if="isOpen"
        class="flex fixed w-full h-full top-0 left-0 bg-black/40 items-center justify-center"
        @click.self="emit('close')"
    >
        <div class="w-4/10 justify-center" @click.stop>
            <slot />
        </div>
    </div>
</template>
