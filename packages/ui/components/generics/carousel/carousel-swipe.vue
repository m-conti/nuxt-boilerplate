<template>
  <div
    class="carousel-swipe carousel-container"
    :class="direction"
    :style="containerStyle"
    @mouseover="() => { if (autoplay?.pauseOnMouseEnter) carousel?.swiper?.autoplay?.pause() }"
    @mouseleave="() => { if (autoplay?.pauseOnMouseEnter) carousel?.swiper?.autoplay?.start() }"
  >
    <client-only>
      <swiper-container
        key="client"
        :ref="(el: any) => { carousel = el; }"
        class="carousel"
        :slides-per-view="slidesPerView ?? nbItemsVisible"
        :slides-per-group="group ? nbItemsVisible : 1"
        :slides-per-group-auto="group"
        :space-between="spaceBetween"
        :direction="direction"
        :pagination="pagination || undefined"
        virtual
        lazy
        :free-mode="freeMode"
        :speed="speed"
        :mousewheel="{
          enabled: enabled && withScroll,
          forceToAxis: true,
          thresholdTime: speed + 200,
          thresholdDelta: 15
        }"
        :enabled="enabled"
        :loop="loop"
        :autoplay="autoplay"
        :loop-add-blank-slides="false"
        :loop-additional-slides="loopAdditionalSlides ?? nbItemsVisible"
        :initial-slide="initialSlide"
        :allow-touch-move="allowTouchMove"
        :no-swiping="noSwiping"
        :effect="effect"
        :coverflow-effect-rotate="0"
        :coverflow-effect-depth="300"
        :coverflow-effect-slide-shadows="true"
        @swiperslidechange.stop="slideChange"
      >
        <slot :items="items" :should-be-loaded="shouldBeLoaded" />
      </swiper-container>
      <template #fallback>
        <div
          key="fallback"
          class="carousel carousel-server"
          :style="serverStyle"
        >
          <slot :items="items.slice(initialSlide, initialSlide + nbItemsVisible)" :should-be-loaded="shouldBeLoaded" />
        </div>
      </template>
    </client-only>
    <slot
      v-if="navigation === 'always' ? true : canGoLeft && navigation"
      name="nav"
      :position="('prev' as const)"
      :action="() => carousel?.swiper?.slidePrev()"
    />
    <slot
      v-if="navigation === 'always' ? true : canGoRight && navigation"
      name="nav"
      :position="('next' as const)"
      :action="() => carousel?.swiper?.slideNext()"
    />
  </div>
</template>

<script setup lang="ts" generic="D extends any">
import { Size } from 'utils';
import 'swiper/css';
import 'swiper/css/virtual';
import type { SwiperContainer } from 'swiper/element';
import type { CarouselItemVisibility, CarouselItemVisibilityQuery, CarouselOptions } from 'ui/types/components/carousel-props';


const props = withDefaults(defineProps<{
  items?: D[];
  itemVisibility?: CarouselItemVisibility;
} & CarouselOptions>(), {
  items: () => [],
  itemVisibility: () => [ 6, 4, 2 ],
  direction: 'horizontal',
  offset: 3,
  offsetAnchor: 'center',
  spaceBetween: Size.rem(1),
  enabled: true,
  speed: 300,
  freeMode: false,
  group: true,
  withScroll: true,
  initial: 0,
  loop: false,
  loopAdditionalSlides: undefined,
  pagination: false,
  autoplay: undefined,
  navigation: true,
  allowTouchMove: true,
  noSwiping: false,
  effect: 'slide',
  slidesPerView: undefined,
});


const emit = defineEmits<{
  (e: 'slideChange', currentIndex: number): void;
}>();

const carousel = ref<SwiperContainer>();

const isMobile = useMedia('mobile');
const isTablet = useMedia('tablet');
const isDesktop = useMedia('desktop');
const isHD = useMedia('HD');
const isWXGA = useMedia('WXGA');
const isSVGA = useMedia('SVGA');
const isQVGA = useMedia('QVGA');


const mediaQuery = computed(() => {
  if (isHD.value) return 'HD';
  else if (isWXGA.value) return 'WXGA';
  else if (isDesktop.value) return 'desktop';
  else if (isSVGA.value) return 'SVGA';
  else if (isTablet.value) return 'tablet';
  else if (isQVGA.value) return 'QVGA';
  else if (isMobile.value) return 'mobile';
  return undefined;
});

const itemVisibleByQuery = computed<CarouselItemVisibilityQuery>(() => {
  const itemVisibility = props.itemVisibility;
  if (itemVisibility instanceof Array || typeof itemVisibility === 'number')
    return {
      HD: typeof itemVisibility === 'number' ? itemVisibility : itemVisibility[0],
      WXGA: typeof itemVisibility === 'number' ? itemVisibility : itemVisibility[0],
      desktop: typeof itemVisibility === 'number' ? itemVisibility : itemVisibility[0],
      SVGA: typeof itemVisibility === 'number' ? itemVisibility : itemVisibility[1],
      tablet: typeof itemVisibility === 'number' ? itemVisibility : itemVisibility[1],
      mobile: typeof itemVisibility === 'number' ? itemVisibility : itemVisibility[2],
      QVGA: typeof itemVisibility === 'number' ? itemVisibility : itemVisibility[2],
    };
  return itemVisibility;
});
const nbItemsVisible = computed(() => itemVisibleByQuery.value[mediaQuery.value ?? 'desktop'] ?? 0);
const initialSlide = computed(() => (typeof props.initial === 'number' ? props.initial : props.items.findIndex((item) => item === props.initial)));

const currentIndex = ref(0);
const slideChange = ({ detail: [swiper] }: any) => { currentIndex.value = swiper.realIndex; emit('slideChange', currentIndex.value); };

const indexWithLoop = (index: number) => (props.loop ? (index + props.items.length) % props.items.length : index);

const startLoadedItems = computed(() => indexWithLoop(currentIndex.value - nbItemsVisible.value));
const endLoadedItems = computed(() => indexWithLoop(currentIndex.value + 2 * nbItemsVisible.value));
const shouldBeLoaded = (index: number) => (startLoadedItems.value >= endLoadedItems.value) !== index.asbetween(startLoadedItems.value, endLoadedItems.value);

const canGoLeft = computed(() => currentIndex.value > 0);
const canGoRight = computed(() => currentIndex.value < props.items.length - nbItemsVisible.value);


defineExpose({
  slidePrev: () => carousel?.value?.swiper?.slidePrev(),
  slideNext: () => carousel?.value?.swiper?.slideNext(),
  slideTo: (index: number) => carousel?.value?.swiper?.slideTo(index),
});

const containerStyle = computed(() => ({
  ...(props.direction === 'horizontal' ?
    {
      ...(props.offsetAnchor === 'end' ? {} : { 'padding-left': `${props.offset}rem` }),
      ...(props.offsetAnchor === 'start' ? {} : { 'padding-right': `${props.offset}rem` }),
    } :
    {
      ...(props.offsetAnchor === 'end' ? {} : { 'padding-bottom': `${props.offset}rem` }),
      ...(props.offsetAnchor === 'start' ? {} : { 'padding-top': `${props.offset}rem` }),
    }),
}));

const serverStyle = computed(() => ({
  ...(props.direction === 'horizontal' ?
    { 'grid-template-columns': `repeat(${nbItemsVisible.value}, 1fr)` } :
    { 'grid-template-rows': `repeat(${nbItemsVisible.value}, 1fr)` }),
  'gap': `${props.spaceBetween}px`,
}));
</script>

<style scoped lang="postcss">
.carousel {
  display: flex;
  position: relative;

  &.carousel-server {
    display: grid;
  }
}

.carousel-swipe {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  z-index: 0;

  &.vertical {
    flex-direction: column;
    height: 100%;

    & .carousel {
      height: 100%;
      &.carousel-server { grid-auto-flow: row; }
    }
  }

  &.horizontal {
    flex-direction: row;
    width: 100%;

    & .carousel {
      width: 100%;
      &.carousel-server { grid-auto-flow: column; }
    }
  }

  &:hover {
    z-index: 1;
  }
}

swiper-container::part(container) {
  overflow: visible;
}

swiper-container::part(pagination) {
  bottom: -2rem;
}

swiper-container::part(bullet-active) {
  height: 0.2rem;
  width: 2.5rem;
  @add-mixin bg-current 500;
  @add-mixin rounded-ruled 0.5rem;
}

swiper-container::part(bullet) {
  height: 0.2rem;
  width: 1rem;
  @add-mixin bg-current 200;
  @add-mixin rounded-ruled 0.5rem;
}

</style>
