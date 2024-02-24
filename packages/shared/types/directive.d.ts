import type { DirectiveHook } from 'vue';

export {};

declare global {
  type DirectiveFunction<V> = DirectiveHook<any, null, V>;
}