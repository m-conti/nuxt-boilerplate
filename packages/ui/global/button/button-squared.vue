<template>
  <base-button class="btn-squared" v-bind="$attrs">
    <template v-for="(_, slot) in $slots" :key="slot" #[slot]><slot :name="slot" /></template>
  </base-button>
</template>

<style lang="postcss" scoped>
.btn-squared {
  padding: 0.25rem 0.75rem;
  @add-mixin rounded-ruled .25rem;
  @add-mixin text-current 700;
  @add-mixin inner-border-current-theme-color 200, 300;
  @add-mixin bg-current-theme-color 100, 200;

  &.selected {
    @add-mixin inner-border-current-theme-color 300, 400;
    @add-mixin bg-current-theme-color 200, 300;
  }

  &:disabled.btn, &.disabled.btn {
    box-shadow: none;
    @add-mixintheme-dark { box-shadow: none; }
    @add-mixin text-color $grey-300;
    @add-mixin bg-theme-color $grey-600, $grey-600;
  }

  &:hover:not(:disabled, .disabled), &.hover {
    box-shadow: none;
    @add-mixintheme-dark { box-shadow: none; }
    @add-mixin bg-current-theme-color 300, 300;
  }
}
</style>
