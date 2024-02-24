<template>
  <component :is="component" class="icon" :class="variant" />
</template>

<script setup lang="ts">
import type { GlobalComponentNameIcon } from 'ui/types/components';

const props = defineProps<{
  variant: GlobalComponentNameIcon;
}>();

const component = computed(() => resolveComponent(`icon-${props.variant}`));
</script>

<style lang="postcss">
.icon {
  fill: currentcolor;

  & path, & rect, & g {
    fill: currentcolor;
  }
}
</style>
