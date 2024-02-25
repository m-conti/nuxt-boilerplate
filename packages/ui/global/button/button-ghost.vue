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
  @add-mixin border-theme-color $grey-900, $grey-50;
  @add-mixin text-theme-color $grey-900, $grey-50;
  @add-mixin rounded-ruled 3.5rem;

  &:deep(img) {
    max-width: 3rem;
  }

  &.selected {
    @add-mixin border-theme-color $grey-900, $grey-50;
  }

  &:disabled.btn, &.disabled.btn {
    border: none;
    @add-mixin bg-theme-color $grey-100, $grey-600;
    @add-mixin text-theme-color $grey-500, $grey-300;
  }

  &:hover:not(:disabled, .disabled), &.hover {
    @add-mixin border-theme-color $grey-600, $grey-300;
  }
}

</style>
