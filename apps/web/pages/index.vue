<template>
  <div class="page">
    <h1>TEST WEB</h1>
    <button-icon to="debug" disabled variant="primary">{{ $t('test.text') }}</button-icon>
    <div class="container">
      <media mobile><button-icon variant="primary" @click="() => setLocale('fr')">fr</button-icon></media>
      <media tablet><button-icon variant="primary" @click="() => setLocale('en')">en</button-icon></media>
      <media desktop server><button-icon variant="primary" @click="() => setLocale('de')">de</button-icon></media>
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

:deep(.image) {
  height: 10rem;
  width: 10rem;
}
</style>
