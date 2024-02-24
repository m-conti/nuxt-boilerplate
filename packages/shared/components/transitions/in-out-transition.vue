<template>
  <transition-group
    v-if="group"
    :name="transition"
    :mode="mode"
    :tag="tag"
    :enter-active-class="`animation-${animation} ${duration}`"
    :leave-active-class="`animation-${animation} ${duration}`"
  >
    <slot />
  </transition-group>
  <transition
    v-else
    :name="transition"
    :mode="mode"
    :enter-active-class="`animation-${animation} ${duration}`"
    :leave-active-class="`animation-${animation} ${duration}`"
  >
    <slot />
  </transition>
</template>

<script setup lang="ts">
type TransitionNames = 'fade'
| 'scale'
| 'slide-left'
| 'slide-right'
| 'slide-top'
| 'slide-bottom'
| 'fade-slide-left'
| 'fade-slide-right'
| 'fade-slide-top'
| 'fade-slide-bottom';

type DurationNames = 'duration-50'
| 'duration-100'
| 'duration-200'
| 'duration-300'
| 'duration-400'
| 'duration-500'
| 'duration-600'
| 'duration-800'
| 'duration-1000';

type ModeTypes = 'default' | 'out-in' | 'in-out';

type AnimationTypes = 'in' | 'out' | 'in-out';


withDefaults(defineProps<{
  transition?: TransitionNames;
  duration?: DurationNames;
  mode?: ModeTypes;
  animation?: AnimationTypes;
  group?: boolean;
  tag?: string;
}>(), {
  transition: 'fade',
  duration: 'duration-100',
  mode: 'default',
  animation: 'in-out',
  group: false,
  tag: 'div',
});
</script>

<style lang="postcss">
/* FADE */

.fade {
  &-enter-active:not(.animation-out), &-leave-active:not(.animation-in) {
    will-change: transform;
    transition-property: opacity;
    transition-timing-function: ease-in;
    transition-duration: 150ms;
    transform: translateZ(0);
  }

  &-enter-from:not(.animation-out), &-leave-to:not(.animation-in) { opacity: 0; }
}


/* SLIDE */

.slide {
  &-left {
    &-enter-active:not(.animation-out), &-leave-active:not(.animation-in) {
      will-change: transform;
      transition-property: transform;
      transition-timing-function: ease-in;
      transition-duration: 150ms;
      transform: translateZ(0);
    }

    &-enter-from:not(.animation-out), &-leave-to:not(.animation-in) { transform: translateX(-100%) translateZ(0); }
  }

  &-right {
    &-enter-active:not(.animation-out), &-leave-active:not(.animation-in) {
      will-change: transform;
      transition-property: transform;
      transition-timing-function: ease-in;
      transition-duration: 150ms;
      transform: translateZ(0);
    }

    &-enter-from:not(.animation-out), &-leave-to:not(.animation-in) { transform: translateX(100%) translateZ(0); }
  }

  &-top {
    &-enter-active:not(.animation-out), &-leave-active:not(.animation-in) {
      will-change: transform;
      transition-property: transform;
      transition-timing-function: ease-in;
      transition-duration: 150ms;
      transform: translateZ(0);
    }

    &-enter-from:not(.animation-out), &-leave-to:not(.animation-in) { transform: translateY(-100%) translateZ(0); }
  }

  &-bottom {
    &-enter-active:not(.animation-out), &-leave-active:not(.animation-in) {
      will-change: transform;
      transition-property: transform;
      transition-timing-function: ease-in;
      transition-duration: 150ms;
      transform: translateZ(0);
    }

    &-enter-from:not(.animation-out), &-leave-to:not(.animation-in) { transform: translateY(100%) translateZ(0); }
  }

  &-to-bottom {
    &-enter-active:not(.animation-out), &-leave-active:not(.animation-in) {
      will-change: transform;
      transition-property: transform;
      transition-timing-function: ease-in;
      transition-duration: 150ms;
      transform: translateZ(0);
    }
    &-enter-from:not(.animation-out) { transform: translateY(-100%) translateZ(0); }
    &-leave-to:not(.animation-in) { transform: translateY(100%) translateZ(0); }
  }
}


/*  SLIDE + FADE */

.fade-slide {
  &-left {
    &-enter-active:not(.animation-out), &-leave-active:not(.animation-in) {
      will-change: transform;
      transition-property: transform;
      transition-timing-function: ease-in;
      transition-duration: 150ms;
      transform: translateZ(0);
    }

    &-enter-from:not(.animation-out), &-leave-to:not(.animation-in) { transform: translateX(-100%) translateZ(0); opacity: 0; }
  }

  &-right {
    &-enter-active:not(.animation-out), &-leave-active:not(.animation-in) {
      will-change: transform;
      transition-property: transform;
      transition-timing-function: ease-in;
      transition-duration: 150ms;
      transform: translateZ(0);
    }

    &-enter-from:not(.animation-out), &-leave-to:not(.animation-in) { transform: translateX(100%) translateZ(0); opacity: 0; }
  }

  &-top {
    &-enter-active:not(.animation-out), &-leave-active:not(.animation-in) {
      will-change: transform;
      transition-property: transform;
      transition-timing-function: ease-in;
      transition-duration: 150ms;
      transform: translateZ(0);
    }

    &-enter-from:not(.animation-out), &-leave-to:not(.animation-in) { transform: translateY(-100%) translateZ(0); opacity: 0; }
  }

  &-bottom {
    &-enter-active:not(.animation-out), &-leave-active:not(.animation-in) {
      will-change: transform;
      transition-property: transform;
      transition-timing-function: ease-in;
      transition-duration: 150ms;
      transform: translateZ(0);
    }

    &-enter-from:not(.animation-out), &-leave-to:not(.animation-in) { transform: translateY(100%) translateZ(0); opacity: 0; }
  }

  &-to-bottom {
    &-enter-active:not(.animation-out), &-leave-active:not(.animation-in) {
      will-change: transform;
      transition-property: transform;
      transition-timing-function: ease-in;
      transition-duration: 150ms;
      transform: translateZ(0);
    }
    &-enter-from:not(.animation-out) { transform: translateY(-100%) translateZ(0); opacity: 0; }
    &-leave-to:not(.animation-in) { transform: translateY(100%) translateZ(0); opacity: 0; }
  }
}


/* SCALE */
.scale {
  &-enter-active:not(.animation-out), &-leave-active:not(.animation-in) {
    will-change: scale;
    transition-property: scale;
    transition-timing-function: ease-in;
    transition-duration: 150ms;
    transform: translateZ(0);
  }

  &-enter-from:not(.animation-out), &-leave-to:not(.animation-in) { @add-mixin scale-ruled 0; }

  &-enter-to:not(.animation-out), &-leave-from:not(.animation-in) { @add-mixin scale-ruled 1.25; }
}
</style>
