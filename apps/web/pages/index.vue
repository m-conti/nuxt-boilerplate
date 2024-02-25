<template>
  <div class="page">
    <h1>TEST WEB</h1>
    <button-icon to="debug" disabled variant="primary">{{ $t('test.text') }}</button-icon>
    <div class="container">
      <media mobile><button-icon variant="primary" @click="() => setLocale('fr')">fr</button-icon></media>
      <media tablet><button-icon variant="primary" @click="() => setLocale('en')">en</button-icon></media>
      <media desktop server><button-icon variant="primary" @click="() => setLocale('de')">de</button-icon></media>
    </div>
    <div class="container">
      <language-icon :variant="'aws'" />
      <language-icon :variant="'shell'" />
      <language-icon :variant="'bitmovin'" />
      <language-icon :variant="'css'" />
      <language-icon :variant="'django'" />
      <language-icon :variant="'googlecloud'" />
      <language-icon :variant="'javascript'" />
      <language-icon :variant="'mongodb'" />
      <language-icon :variant="'node'" />
      <language-icon :variant="'nuxt'" />
      <language-icon :variant="'postcss'" />
      <language-icon :variant="'postgresql'" />
      <language-icon :variant="'python'" />
      <language-icon :variant="'react'" />
      <language-icon :variant="'swift'" />
      <language-icon :variant="'typescript'" />
      <language-icon :variant="'vue'" />
      <language-icon :variant="'wasm'" />
      <language-icon :variant="'webpack'" />
    </div>
  </div>
</template>

<script setup lang="ts">

withDefaults(defineProps<{

}>(), {

});

const { setLocale } = useLocales();

</script>

<style scoped lang="postcss">
.page {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @add-mixin media mobile { background-color: red !important; }
  @add-mixin media tablet { background-color: blue !important; }
  @add-mixin media desktop { background-color: green !important; }
}

.container {
  padding: 2rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
}

:deep(.language-icon) {
  height: 2rem;
  width: 2rem;
}

:deep(.image) {
  height: 10rem;
  width: 10rem;
}
</style>
