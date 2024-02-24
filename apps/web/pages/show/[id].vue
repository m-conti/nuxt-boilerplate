<template>
  <div class="fiction">
    <h1 v-if="fiction">{{ fiction?.title }}</h1>
    <div v-else-if="pending" class="pending"><loader-circle /></div>
    <p v-else>ERROR</p>
    <button-icon to="show">return</button-icon>
  </div>
</template>

<script setup lang="ts">
import { ApiManager } from 'shared';

const route = useRoute<'show-id'>();

const id = computed(() => route.params.id);

withDefaults(defineProps<{

}>(), {

});

const { data, pending } = await useAsyncData('show-fiction', () => ApiManager.call('getFictionMetadata', id.value), { lazy: true });

const fiction = computed(() => data.value?.result);
</script>

<style lang="postcss" scoped>
.fiction {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  & > .pending {
    height: 2rem;
    width: 2rem;
  }
}
</style>
