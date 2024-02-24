<template>
  <div class="page-layout layout-default">
    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="postcss" scoped>
.layout-default {
  @add-mixin bg-theme-color $preset-background;
  @add-mixin text-theme-color $preset-text;
}
</style>

<style lang="postcss">
.page {

}
</style>
