<template>
  <base-button class="btn-circled" v-bind="$attrs">
    <template v-for="(_, slot) in $slots" :key="slot" #[slot]><slot :name="slot" /></template>
  </base-button>
</template>

<style lang="postcss" scoped>
.btn-circled {
  width: 3.5rem;
  height: 3.5rem;

  &:deep(.icon), &:deep(.smooth-image) {
    max-width: 3rem;
  }

  @add-mixin rounded-ruled;
  @add-mixin text-current 700;
  @add-mixin bg-current-theme-color 100, 200;
  @add-mixin inner-border-current-theme-color 200, 300;

  &.selected {
    @add-mixin bg-current-theme-color 200, 300;
    @add-mixin inner-border-current-theme-color 300, 400;
  }

  &:disabled.btn, &.disabled.btn {
    box-shadow: none;
    @add-mixintheme-dark { box-shadow: none; }
    @add-mixin text-color $grey-300;
    @add-mixin bg-theme-color $grey-600, $grey-600;
  }

  &:hover:not(:disabled, .disabled), &.hover:not(:disabled, .disabled) {
    box-shadow: none;
    @add-mixintheme-dark { box-shadow: none; }
    @add-mixin bg-current-theme-color 300, 300;
  }
}
</style>
