<template>
  <div class="page">
    <h2>DEBUG</h2>
    <nuxt-link :to="localePath({ name: 'debug-test' })">TEST</nuxt-link>
    <nuxt-link :to="localePath({ name: 'index' })">HOME</nuxt-link>
  </div>
</template>

<script lang="ts" setup>
const localePath = useLocalePath();
</script>
