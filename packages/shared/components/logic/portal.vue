<template>
  <teleport v-if="mounted" :to="to">
    <slot />
  </teleport>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  target: string;
}>(), {

});

const mounted = usePortalMounted(props.target);
const to = computed(() => `[data-portal-target="${props.target}"]`);

</script>
