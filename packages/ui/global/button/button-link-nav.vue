<template>
  <base-button class="btn-link-nav" v-bind="$attrs">
    <template v-for="(_, slot) in $slots" :key="slot" #[slot]><slot :name="slot" /></template>
  </base-button>
</template>

<style scoped lang="postcss">
.btn-link-nav {
  @add-mixin text-theme-color $grey-900, $grey-50;

  &.selected {
    border-bottom: solid .1rem;
    @add-mixin border-current-theme-color 500, 300;
    @add-mixin text-current-theme-color 500, 300;
  }

  &:disabled, &.disabled {
    @add-mixin text-theme-color $grey-300, $grey-600;
  }

  &:hover:not(:disabled, .disabled), &.hover:not(:disabled, .disabled) {
    @add-mixin text-current-theme-color 400, 200;
  }


}

</style>
