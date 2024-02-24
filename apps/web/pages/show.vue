<template>
  <nuxt-page />
</template>

<script setup lang="ts">

definePageMeta({
  middleware: [ 'auth', 'universe-show' ],
});
</script>
