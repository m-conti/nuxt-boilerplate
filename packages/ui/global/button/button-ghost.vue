<template>
  <base-button class="btn-ghost" v-bind="$attrs">
    <template v-for="(_, slot) in $slots" :key="slot" #[slot]><slot :name="slot" /></template>
  </base-button>
</template>

<style scoped lang="postcss">
.btn-ghost {
  width: 3.5rem;
  height: 3.5rem;
  border: 1px solid;
  background-color: transparent;
  @add-mixin border-theme-color $gray-900, $gray-50;
  @add-mixin text-theme-color $gray-900, $gray-50;
  @add-mixin rounded-ruled 3.5rem;

  &:deep(img) {
    max-width: 3rem;
  }

  &.selected {
    @add-mixin border-theme-color $gray-900, $gray-50;
  }

  &:disabled.btn, &.disabled.btn {
    border: none;
    @add-mixin bg-theme-color $gray-100, $gray-600;
    @add-mixin text-theme-color $gray-500, $gray-300;
  }

  &:hover:not(:disabled, .disabled), &.hover {
    @add-mixin border-theme-color $gray-600, $gray-300;
  }
}

</style>
