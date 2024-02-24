<template>
  <div class="debug-component">
    <div class="debug-row">
      <span class="debug-key">route : </span>
      <span class="debug-value">{{ $route.fullPath }}</span>
    </div>
    <div v-if="key" class="debug-row">
      <span class="debug-key">key-code : </span>
      <span class="debug-value">{{ key.keyCode }}</span>
    </div>
    <div v-if="key" class="debug-row">
      <span class="debug-key">key-name : </span>
      <span class="debug-value">{{ key.key }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
  keyListener?: boolean;
}>(), {
  keyListener: false,
});

const key = ref<KeyboardEvent>();
if (props.keyListener) {
  const listenerKey = (event: KeyboardEvent) => { key.value = event; };
  onMounted(() => { document.addEventListener('keydown', listenerKey); });
  onUnmounted(() => { document.removeEventListener('keydown', listenerKey); });
}

</script>

<style scoped lang="postcss">
.debug-component {
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  @add-mixin bg-color $gray-900, $opacity-60;
  @add-mixin text-color $white;
  padding: 2rem;
  min-width: 20rem;
}
</style>
