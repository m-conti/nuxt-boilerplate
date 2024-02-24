import type { Directive } from 'vue';

export type Modifiers = 'test1' | 'test2' | 'test3';
export type Values = 'value1' | 'value2' | 'value3';

export default defineNuxtPlugin((app) => {
  app.vueApp.directive('test', <Directive<any, Values>>{
    created(el, binding, vnode) {
      console.log(el, binding, vnode);
    },
  });
});
