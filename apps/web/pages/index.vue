<template>
  <div class="page">
    <h1>TEST WEB</h1>
    <button-icon to="debug" disabled variant="primary">{{ $t('test.text') }}</button-icon>
    <div class="container">
      <button-icon variant="primary" @click="() => setLocale('fr')">fr</button-icon>
      <button-icon variant="primary" @click="() => setLocale('en')">en</button-icon>
      <button-icon variant="primary" @click="() => setLocale('de')">de</button-icon>
    </div>
    <div class="container">
      <carousel-swipe :item-visibility="3" :items="PROJECTS">
        <template #default="{ items }">
          <swiper-slide v-for="(project, index) in items" :key="project.id" :virtual-index="index">
            <project-tile :key="project.id" :data="project" />
          </swiper-slide>
        </template>
      </carousel-swipe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PROJECTS } from '~/models/project';

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
