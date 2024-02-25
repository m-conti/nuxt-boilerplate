<template>
  <component :is="component" class="language-icon" :class="variant" />
</template>

<script setup lang="ts">
import type { GlobalComponentNameLanguageIcon } from 'ui/types/components';

const props = defineProps<{
  variant: GlobalComponentNameLanguageIcon;
}>();

const component = computed(() => resolveComponent(`language-icon-${props.variant}`));
</script>

<style lang="postcss" scoped>
.language-icon {

}
</style>
