<template>
  <component
    :is="is"
    v-active-on-click
    class="btn"
    :class="classes"
    :to="to ? localePath(to as any) : undefined"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <icon-image v-if="icon" :source="icon" :alt="$slots.default?.toString() ?? ''" />
    <slot name="external" />
    <span v-if="$slots.default" class="inner-text">
      <slot v-if="selected" name="selected"><slot /></slot>
      <slot v-else-if="disabled" name="disabled"><slot /></slot>
      <slot v-else />
    </span>
  </component>
</template>

<script setup lang="ts">
import type { ButtonProps } from 'ui/types/components/button-props';

const localePath = useLocalePath();

const props = withDefaults(defineProps<ButtonProps>(), {
  environment: undefined,
  icon: undefined,
  to: undefined,
  selected: false,
  disabled: false,
  animated: true,
});

const store = useDisplayStore();
const is = computed(() => (props.to && !props.disabled ? resolveComponent('nuxt-link') : 'button'));
const computedEnv = computed(() => props.environment ?? store.environment);

const classes = computed(() => [
  `environment-${computedEnv.value} no-app-env`,
  { 'selected': props.selected, 'disabled': props.disabled, 'animated': props.animated },
]);

</script>
<style scoped lang="postcss">
.btn {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  box-sizing: border-box;
  @add-mixin text-truncate;

  & > .inner-text {
    @add-mixin text-truncate;
    padding-left: 0.25rem;

    &:only-child { padding-left: 0; }
  }

  &.animated {
    @add-mixin scale-ruled 0.98;
    transition: all 0.2s ease-in-out;
    &:hover:not(.disabled, :disabled), &.hover:not(.disabled, :disabled) { @add-mixin scale-ruled 1.02; }
    &[data-active="true"] { @add-mixin scale-ruled 0.9; }
  }

  &:disabled, &.disabled {
    cursor: auto;
  }

  &:deep(.icon), &:deep(.smooth-image) {
    max-width: 5rem;
    height: 1.5rem;
    min-width: 1.5rem;
  }
}
</style>
