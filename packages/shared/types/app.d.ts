import type Plugins from 'shared/plugins/plugins';
import type Directives from 'shared/directives/directives';
export {};

declare module '#app' {
  interface NuxtApp extends Plugins.Injections {}
}

declare module 'nuxt/dist/app/nuxt' {
  interface NuxtApp extends Plugins.Injections {}
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties extends Plugins.Injections, Directives.Injections {}
}

declare module 'vue' {
  interface ComponentCustomProperties extends Plugins.Injections, Directives.Injections {}
}

