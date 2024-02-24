<template>
  <button-link class="btn-link-underlined" v-bind="$attrs">
    <template v-for="(_, slot) in $slots" :key="slot" #[slot]><slot :name="slot" /></template>
  </button-link>
</template>

<style scoped lang="postcss">
.btn-link-underlined {
  border-bottom: solid .1rem;
  @add-mixin border-current-theme-color 500, 200;

  &.selected {
    @add-mixin border-current-theme-color 800, 400;
  }

  &:disabled.btn, .disabled.btn {
    @add-mixin border-theme-color $gray-300, $gray-600;
  }

  &:hover:not(:disabled, .disabled), &.hover:not(:disabled, .disabled) {
    @add-mixin border-current-theme-color 400, 100;
  }
}

</style>
