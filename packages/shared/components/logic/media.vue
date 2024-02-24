<template>
  <slot v-if="toDisplay" />
</template>

<script setup lang="ts">
/* eslint-disable vue/prop-name-casing */
import mediaQuery from 'ui/postcss/media-query';

const props = withDefaults(defineProps<{
  mobile?: boolean;
  tablet?: boolean;
  desktop?: boolean;
  FHD?: boolean;
  QHD?: boolean;
  UHD?: boolean;
  server?: boolean;
}>(), {
  mobile: false,
  tablet: false,
  desktop: false,
  FHD: false,
  QHD: false,
  UHD: false,
  server: false,
});

const is = reactive<{ -readonly [key in keyof typeof props]?: Ref<boolean> }>(
  props.aspick(Boolean).asmap('value', (_, key) => (
    key === 'server' ? ref(process.server) : useMediaQuery(mediaQuery[`media-query-${key}` as keyof typeof mediaQuery])
  )),
);

const toDisplay = computed(() => (is.asassert('some')));
</script>
