import { extendsJs } from 'utils';

export default defineNuxtPlugin({
  order: 11,
  setup: () => {
    extendsJs();
  },
});
