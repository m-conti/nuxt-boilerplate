<template>
  <component :is="component" v-bind="$props">
    <template v-for="(_, slot) in $slots" :key="slot" #[slot]><slot :name="slot" /></template>
  </component>
</template>
<script setup lang="ts">
import type { GlobalComponentNameButton, ButtonProps } from 'ui/types/components';

const props = withDefaults(defineProps<{
  variant?: GlobalComponentNameButton;
} & ButtonProps>(), {
  variant: 'primary',
  environment: undefined,
  icon: undefined,
  to: undefined,
  selected: false,
  disabled: false,
  animated: true,
});

const component = computed(() => resolveComponent(`button-${props.variant}`));

</script>
