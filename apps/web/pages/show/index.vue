<template>
  <div class="show-page">
    <div v-if="fictions" class="fictions">
      <button-icon
        v-for="fiction in fictions"
        :key="fiction"
        :to="{ name: 'show-id', params: { id: fiction } }"
      >
        {{ fiction }}
      </button-icon>
    </div>
    <div v-else class="pending"><loader-circle /></div>
    <button-icon to="index">{{ $t('common.back') }}</button-icon>
  </div>
</template>

<script setup lang="ts">
import { ApiManager } from 'shared';

withDefaults(defineProps<{

}>(), {

});

const { data } = await useAsyncData('carousel-show', () => ApiManager.call('getFictionCarousel', 'sh_ser_last_added'), { lazy: true });
const fictions = computed(() => data.value?.result?.carousel.contentIds);
</script>

<style scoped lang="postcss">
.show-page {
  .fictions {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    padding: 2rem;
    gap: 1rem;
    justify-content: space-around;
    align-items: flex-start;

  }

  & > .pending {
    height: 2rem;
    width: 2rem;
  }
}
</style>
