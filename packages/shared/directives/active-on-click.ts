import { Registery } from 'utils';

export default defineNuxtPlugin((nuxt) => {

  nuxt.vueApp.directive('active-on-click', {
    mounted(element: HTMLElement) {
      (element as any).activeByKey = () => {
        element.dataset.active = 'true';

        (element as any).activeByKeyTimer = Registery.setTimeout(() => {
          // eslint-disable-next-line fp/no-delete
          delete element.dataset.active;
          (element as any).activeByKeyTimer = undefined;
        }, 200);

      };

      Registery.addEventListener(element, 'click', (element as any).activeByKey);
    },
    unmounted(element: HTMLElement) {
      Registery.removeEventListener(element, 'click', (element as any).activeByKey);
      if ((element as any).activeByKeyTimer)
        Registery.clearTimeout((element as any).activeByKeyTimer);
      (element as any).activeByKeyTimer = undefined;
    },
  });
  return {};
});
