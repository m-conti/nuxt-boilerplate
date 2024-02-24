import type { Directive, DirectiveBinding } from 'vue';

export type Values = any;

type ModifierNames = 'dynamic';

type Modifiers = Record<ModifierNames, boolean>;

const LISTENER_NAME = 'gaTrack';
const commandNames = [ 'config', 'get', 'set', 'event', 'consent' ] as const;
type CommandNames = Union<typeof commandNames>;

const DEFAULT_MODIFIERS: Modifiers = {
  dynamic: false,
};

const listenTrack = (el: HTMLElement, binding: DirectiveBinding<Values>) => {
  const command = binding.modifiers.aspick(commandNames).asfind(Boolean, 'key') ?? 'event' as CommandNames;
  const listenerName = LISTENER_NAME + command.ascase('pascal') + (binding.arg?.ascase('pascal') ?? '');

  const listener = (_: MouseEvent) => {
    // useGtag().gtag(command);
  };

  el.asset(listenerName, listener);
  el.ason('click', listener);
};

const removeTrack = (el: HTMLElement, binding: DirectiveBinding<Values>) => {
  const command = binding.modifiers.aspick(commandNames).asfind(Boolean, 'key') ?? 'event' as CommandNames;
  const listenerName = LISTENER_NAME + command.ascase('pascal') + (binding.arg?.ascase('pascal') ?? '');

  const listener = (el as any).asget(listenerName) as ((_: MouseEvent) => void | undefined);

  if (listener)
    el.asoff('click', listener);
};

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.directive('ga-track', <Directive<any, Values>>{
    mounted(el: HTMLElement, binding) {
      listenTrack(el, binding);
    },
    updated(el: HTMLElement, binding) {
      const modifiers: Modifiers = binding.modifiers.asdefaults(DEFAULT_MODIFIERS);

      if (!modifiers.dynamic) return;

      removeTrack(el, binding);
      listenTrack(el, binding);
    },
    unmounted(el: HTMLElement, binding: DirectiveBinding<Values>) {
      removeTrack(el, binding);
    },
  });
});
