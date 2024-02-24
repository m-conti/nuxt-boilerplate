<template>
  <base-button class="btn-badge" v-bind="$attrs">
    <template v-for="(_, slot) in $slots" :key="slot" #[slot]><slot :name="slot" /></template>
  </base-button>
</template>

<style scoped lang="postcss">
.btn-badge {
  padding: 0.5rem 1rem;
  @add-mixin rounded-ruled;
  @add-mixin bg-current 200;
  @add-mixin text-current 500;

  &.selected {
    @add-mixin bg-current 600;
    @add-mixin text-current 50;
  }

  &.btn:disabled, &.btn.disabled {
    @add-mixin bg-color $gray-600;
    @add-mixin text-color $gray-300;
  }

  &:hover:not(:disabled, .disabled), &.hover:not(:disabled, .disabled) {
    @add-mixin bg-current 400;
    @add-mixin text-current 50;
  }
}
</style>
