<template>
  <div class="page">
    <h3>DEBUG TEST</h3>
    <nuxt-link :to="localePath({ name: 'debug-test-number', params: { number: 10 }})">HOME</nuxt-link>
    <nuxt-link :to="localePath({ name: 'debug-test' })">TEST</nuxt-link>
  </div>
</template>

<script lang="ts" setup>
const localePath = useLocalePath();
</script>
