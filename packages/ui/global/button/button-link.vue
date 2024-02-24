<template>
  <base-button class="btn-link" v-bind="$attrs">
    <template v-for="(_, slot) in $slots" :key="slot" #[slot]><slot :name="slot" /></template>
  </base-button>
</template>

<style scoped lang="postcss">
.btn-link {
  @add-mixin text-current-theme-color 500, 200, 1;

  &.selected {
    @add-mixin text-current-theme-color 800, 300, 1;
  }

  &:disabled.btn, &.disabled.btn {
    @add-mixin text-theme-color $gray-300, $gray-600, 1;
  }

  &:hover:not(:disabled, .disabled), &.hover:not(:disabled, .disabled) {
    @add-mixin text-current-theme-color 400, 100, 1;
  }
}

</style>
