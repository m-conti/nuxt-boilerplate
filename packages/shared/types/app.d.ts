
export {};

interface PluginsInjections {

}

declare module '#app' {
  interface NuxtApp extends PluginsInjections {}
}


declare module '@vue/runtime-core' {
  interface ComponentCustomProperties extends PluginsInjections {}
}

declare module 'vue' {
  interface ComponentCustomProperties extends PluginsInjections {}
}
