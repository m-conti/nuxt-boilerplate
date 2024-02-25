<template>
  <base-button class="btn-tab" v-bind="$attrs">
    <template v-for="(_, slot) in $slots" :key="slot" #[slot]><slot :name="slot" /></template>
  </base-button>
</template>

<style scoped lang="postcss">
.btn-tab {
  position: relative;
  @add-mixin text-theme-color $grey-900, $grey-50;
  overflow: visible;
  padding-bottom: 0.5rem;

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: ' ';
    width: 100%;
    height: 3px;
    @add-mixin rounded-ruled;
  }

  &.selected {
    @add-mixin text-current-theme-color 500, 400;

    &::after {
      background-color: currentcolor;
    }
  }

  &:disabled, &.disabled {
    @add-mixin text-theme-color $grey-300, $grey-600;
  }

  &:hover:not(:disabled, .disabled), &.hover:not(:disabled, .disabled) {
    @add-mixin text-current-theme-color 400, 200;
  }
}
</style>
