import { register } from 'swiper/element/bundle';

export default defineNuxtPlugin({
  order: 40,
  setup: () => {
    register();
  },
});
