import { type Preview } from "@storybook/vue3";
import { addons } from "@storybook/preview-api";
import { UPDATE_GLOBALS } from "@storybook/core-events";
import colors from '../postcss/color';
import { useDisplayStore } from 'shared/stores/use-display-store';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      values: [
        { name: 'theme-light', value: colors['gray-50'] },
        { name:'theme-dark', value: colors['gray-900'] }
      ]
    }
  },
};

let channel = addons.getChannel();

channel.addListener(UPDATE_GLOBALS, (args) => {
  const layout = window.document.querySelector('.page-layout');
  if (!layout) return;
  if (args.globals.backgrounds.value === colors['gray-900']) {
    useDisplayStore().switchTheme('theme-dark');
    layout.classList.add('theme-dark');
  }
  else {
    useDisplayStore().switchTheme('theme-light');
    layout.classList.remove('theme-dark');
  }
});

export default preview;
