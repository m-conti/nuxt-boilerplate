<template>
  <base-button class="btn-secondary" v-bind="$attrs">
    <template v-for="(_, slot) in $slots" :key="slot" #[slot]><slot :name="slot" /></template>
  </base-button>
</template>

<style scoped lang="postcss">
.btn-secondary {
  padding: 0.75rem 2.5rem;
  @add-mixin rounded-ruled .25rem;
  @add-mixin bg-theme-light $white;
  @add-mixin theme-dark { @add-mixin bg-current 50; }
  @add-mixin text-current 500;
  @add-mixin inner-border-current 500, 2px;

  &.selected:not(:disabled, .disabled) {
    box-shadow: none;
    @add-mixin bg-reflect;
    @add-mixin rounded-ruled .25rem;
    @add-mixin text-current 50;
    @add-mixin bg-current 600;
  }

  &:disabled.btn, &.disabled.btn {
    box-shadow: none;
    @add-mixin bg-color $gray-600;
    @add-mixin text-color $gray-300;
  }

  &:hover:not(:disabled, .disabled), &.hover:not(:disabled, .disabled) {
    box-shadow: none;
    @add-mixin bg-reflect;
    @add-mixin rounded-ruled .25rem;
    @add-mixin text-current 50;
    @add-mixin bg-current 400;
  }
}
</style>
