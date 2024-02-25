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
    <div class="debug-column">
      <button-icon @click="switchTheme">SWITCH THEME</button-icon>
      <button-icon @click="switchEnvironment">SWITCH ENV</button-icon>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
  keyListener?: boolean;
}>(), {
  keyListener: false,
});

const { switchTheme, switchEnvironment } = useDisplayStore();

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
  @add-mixin bg-color $grey-900, $opacity-60;
  @add-mixin text-color $white;
  padding: 2rem;
  min-width: 20rem;

  .debug-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .debug-column {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
