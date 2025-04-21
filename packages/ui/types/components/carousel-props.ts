
export interface CarouselItemVisibilityQuery {
  HD?: number;
  WXGA?: number;
  desktop?: number;
  SVGA?: number;
  tablet?: number;
  mobile?: number;
  QVGA?: number;
}

export type CarouselItemVisibility = number | [number, number, number] | CarouselItemVisibilityQuery;

export interface CarouselOptions<D = any> {
  direction?: 'horizontal' | 'vertical';
  offset?: number;
  offsetAnchor?: 'start' | 'center' | 'end';
  spaceBetween?: number;
  speed?: number;
  enabled?: boolean;
  freeMode?: boolean;
  group?: boolean;
  withScroll?: boolean;
  initial?: number | D;
  loop?: boolean;
  loopAdditionalSlides?: number;
  pagination?: boolean;
  autoplay?: { delay?: number; disableOnInteraction?: boolean; pauseOnMouseEnter?: boolean; reverseDirection?: boolean };
  navigation?: boolean | 'always';
  allowTouchMove?: boolean;
  noSwiping?: boolean;
  effect?: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip';
  slidesPerView?: number | 'auto' | undefined;
}
