<template>
  <div
    class="project-tile"
    @mouseover="setIsOver(true)"
    @mouseleave="setIsOver(false)"
  >
    <transition name="details">
      <div v-if="isOver" class="details">
        <h3>{{ data.name }}</h3>
        <div class="languages">
          <transition-group name="language-icon">
            <language-icon
              v-for="(language, index) in data.languages"
              v-show="delayedOver"
              :key="language.name"
              :variant="language.logo"
              :style="{ 'transition-delay': `${index}00ms` }"
            />
          </transition-group>
        </div>
      </div>
    </transition>
    <transition name="background">
      <smooth-image
        v-if="!isOver && cover"
        :source="cover"
        :alt="data.name"
        class="background"
      />
      <smooth-image
        v-else-if="image"
        :source="image"
        :alt="data.name"
        class="background"
      />
    </transition>
  </div>
</template>

<script lang="ts" setup>
import type { Project } from '~/models/project';

const isOver = ref(true);
const delayedOver = ref(false);

const setIsOver = (value: boolean) => {
  isOver.value = value;
  (() => { delayedOver.value = value; }).asdelay(300);
};

const props = withDefaults(defineProps<{
  data: Project;
}>(), {

});

const cover = computed(() => props.data.cover);
const image = computed(() => props.data.images[0]);

</script>


<style scoped lang="postcss">
.project-tile {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  contain: content;

  width: 24rem;
  height: 15rem;

  @add-mixin rounded 0.5rem;

  transition: all 0.5s ease-in-out;
  transform: scale(0.95);

  &:hover {
    height: 20.5rem;
    transform: scale(1.05);
    @add-mixin shadow-highlight;
  }

  & > .details {
    display: flex;
    flex-direction: column;

    padding: 1rem;
    width: 100%;
    @add-mixin bg-theme-color $grey-100, $grey-900;

    & > .languages {
      display: flex;
      gap: 0.5rem;
      margin-top: 0.5rem;

      &:deep(> .language-icon) {
        width: 1rem;
        height: 1rem;

        &-enter-active, &-leave-active {
          transition: all 0.8s ease-in-out;
        }

        &-enter-from, &-leave-to {
          transform: translateX(24rem) scaleX(2.5) skew(-45deg);
        }

        &-enter-to, &-leave-from {
          transform: translateX(0);
        }
      }
    }

    &-enter-active, &-leave-active {
      transition: all 0.5s ease-in-out;
    }

    &-enter-from, &-leave-to {
      transform: translateY(100%);
    }

    &-enter-to, &-leave-from {
      transform: translateY(0);
    }
  }

  &:deep(> .background) {
    z-index: -1;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 15rem;
    object-fit: cover;
    transition: all 0.3s ease-in-out 0.3s;

    &-enter-from, &-leave-to {
      opacity: 0;
    }

    &-enter-to, &-leave-from {
      opacity: 1;
    }
  }
}
</style>
