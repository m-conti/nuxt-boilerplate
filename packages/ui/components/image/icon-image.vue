<template>
  <smooth-image
    v-if="isImage"
    :source="(source as Url | EndPoint)"
    :alt="alt"
    v-bind="$attrs"
  />
  <static-icon
    v-else
    :variant="(source as GlobalComponentNameIcon)"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import type { Url } from 'models/interfaces/network';
import type { EndPoint } from 'shared/interfaces/api';
import type { GlobalComponentNameIcon } from 'ui/types/components';

const props = withDefaults(defineProps<{
  source: GlobalComponentNameIcon | Url | EndPoint;
  alt: string;
}>(), {

});

const isImage = computed(() => (typeof props.source !== 'string' || (/[^\-a-z]/).test(props.source)));


</script>
