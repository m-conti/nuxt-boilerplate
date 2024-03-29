<template>
  <div class="page-project">
    <div class="container">
      <nuxt-page />
    </div>
  </div>
</template>

<script setup lang="ts">
useLocaleTitle('project');

definePageMeta({
  middleware: [],
});

defineI18nRoute({

});


</script>

<style scoped lang="postcss">
.page-project {
  @add-mixin generic-page;
}

.container {
  @add-mixin generic-container-center 2rem;
  flex-direction: column;
}
</style>
