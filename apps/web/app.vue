<template>
  <main
    class="main app-quality-rule-scale app-quality-rule-shadow app-quality-rule-opacity app-quality-rule-rounded app-quality-high"
    :class="classes"
  >
    <nuxt-layout id="root" class="page-main">
      <nuxt-page class="page" />
    </nuxt-layout>
    <portal-target name="modal" />
    <debug-component key-listener />
  </main>
</template>

<script lang="ts" setup>
const { environment, theme } = storeToRefs(useDisplayStore());
useSeoHydration();

const classes = computed(() => [
  `environment-${environment.value}`,
  `theme-${theme.value}`,
]);
</script>
