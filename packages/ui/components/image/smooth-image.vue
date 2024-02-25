<template>
  <in-out-transition v-if="$props.duration" :duration="$props.duration">
    <img
      v-show="isLoaded"
      class="smooth-image"
      v-bind="$attrs"
      :src="image"
      :alt="props.alt"
      @load="onLoaded"
      @error="onError"
    />
  </in-out-transition>
  <img
    v-else
    v-show="isLoaded"
    class="smooth-image"
    v-bind="$attrs"
    :src="image"
    :alt="props.alt"
    @load="onLoaded"
    @error="onError"
  />
</template>

<script setup lang="ts">
import { EndPointLib, type EndPoint } from 'shared/interfaces/api';
import { manyToArray, isString } from 'utils';
import type { InOutTransition } from '#build/components';

const emit = defineEmits<{
  (e: 'error'): void;
  (e: 'load'): void;
}>();

const props = withDefaults(defineProps<{
  source: Many<string | EndPoint>;
  fallback?: Many<string | EndPoint>;
  alt: string;
  duration?: false | InstanceType<typeof InOutTransition>['$props']['duration'];
}>(), {
  fallback: undefined,
  duration: 'duration-200' as any,
});


const currentIndex = ref<number>(0);

const isLoaded = useState<boolean>(() => process.server);


const sources = computed(() => [
  ...manyToArray(props.source),
  ...manyToArray(props.fallback),
].asmap('array', (data) => (isString(data) ? data : EndPointLib.getFullUrl(data))));

const image = computed(() => sources.value.asindex(currentIndex.value));


const onLoaded = () => {
  isLoaded.value = true;
  emit('load');
};

const onError = () => {
  if (currentIndex.value < 0) return;
  currentIndex.value += 1;
  if (currentIndex.value >= sources.value.length) {
    currentIndex.value = -1;
    emit('error');
  }
};


watch(sources, () => { currentIndex.value = 0; });
</script>

<style scoped>
.smooth-image {
  object-fit: contain;
}
</style>
