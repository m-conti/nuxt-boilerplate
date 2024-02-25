<template>
  <base-button class="btn-tertiary" v-bind="$attrs">
    <template v-for="(_, slot) in $slots" :key="slot" #[slot]><slot :name="slot" /></template>
  </base-button>
</template>

<style scoped lang="postcss">
.btn-tertiary {
  padding: 0.75rem 2.5rem;
  @add-mixin text-current 500;
  @add-mixin bg-current 200;
  @add-mixin rounded-ruled .25rem;

  &.selected {
    @add-mixin bg-current 600;
    @add-mixin text-current 50;
  }

  &:disabled, .disabled {
    @add-mixin text-color $grey-300;
    @add-mixin bg-color $grey-600;
  }

  &:hover:not(:disabled, .disabled), &.hover {
    @add-mixin bg-current 400;
    @add-mixin text-current 50;
  }
}
</style>
