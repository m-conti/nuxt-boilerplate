<template>
  <base-button class="btn-primary" v-bind="$attrs">
    <template v-for="(_, slot) in $slots" :key="slot" #[slot]><slot :name="slot" /></template>
  </base-button>
</template>

<style scoped lang="postcss">
.btn-primary {
  padding: 0.75rem 4rem;
  @add-mixin bg-reflect;
  @add-mixin rounded-ruled .25rem;
  @add-mixin bg-current 500;
  @add-mixin text-current 50;

  &.selected:not(:disabled, .disabled) {
    @add-mixin bg-current 600;
  }

  &:disabled.btn, &.disabled.btn {
    @add-mixin bg-color $gray-600;
    @add-mixin text-color $gray-300;
  }

  &:hover:not(:disabled, .disabled), &.hover:not(:disabled, .disabled) {
    @add-mixin bg-current 400;
  }
}

</style>
