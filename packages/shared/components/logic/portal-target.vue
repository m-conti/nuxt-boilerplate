<template>
  <div :data-portal-target="name" />
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
  name: string;
}>(), {

});

onMounted(() => { addPortal(props.name); });
</script>
