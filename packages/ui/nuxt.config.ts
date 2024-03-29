// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';
const isProd = process.env.NODE_ENV === 'production';

export default defineNuxtConfig({
  modules: [
    [ 'shared/nuxt.ts', { currentPaths: ['ui'], types: [ 'utils', 'models', 'shared', 'ui' ]}],
    '@nuxtjs/i18n',
    [ 'nuxt-typed-router', { strict: false }],
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'shared/modules/build-env.ts',
    '@nuxtjs/storybook',
  ],
  storybook: {
    url: 'http://localhost:6006',
    storybookRoute: '/__storybook__',
    port: 6006,
  },

  components: {
    dirs: [
      { path: '~/components', pathPrefix: false, extensions: ['.vue']},
      { path: '~/global', pathPrefix: false, extensions: ['.vue']/* , global: true */ },
    ],
  },
  imports: {
    dirs: [ 'stores', 'composables' ],
  },
  plugins: [
    'node_modules/shared/plugins/add-extensions',
    'node_modules/shared/plugins/shared-fetch-config',
    'node_modules/shared/plugins/polyfill.client',
    'node_modules/shared/plugins/global-init-app',
  ],
  css: [
    'ui/assets/css/display-fix.css',
    'ui/assets/css/transitions.css',
    'ui/assets/css/animations.css',
    'ui/assets/css/partials/buttons.css',
    'ui/assets/css/partials/duration.css',
    'ui/assets/css/partials/fonts.css',
    'ui/assets/css/partials/text.css',
    'ui/assets/css/partials/player.css',
    'ui/assets/css/partials/rules.css',
    'ui/assets/css/partials/uhd.css',
    'ui/assets/css/main.css',
  ],


  postcss: {
    plugins: {
      'postcss-import': {},
      'postcss-mixins': { mixinsDir: path.join(__dirname, 'assets/css/mixins') },
      'postcss-simple-vars': {
        variables: {
          ...require('./postcss/color'),
          ...require('./postcss/opacity'),
          ...require('./postcss/text'),
          ...require('./postcss/texture'),
          ...require('./postcss/preset-mode'),
          ...require('./postcss/media-query'),
        },
      },
      'postcss-nested': {},
      'postcss-hexrgba': {},
      'postcss-focus-within': {},
      'postcss-gap-properties': {},
      'postcss-url': {},
      'postcss-calc': {},
      'postcss-aspect-ratio-polyfill': {},
      'cssnano': isProd && {
        preset: [ 'default', {
          cssDeclarationSorter: true,
          calc: true,
          colormin: true,
          convertValues: true,
          discardComments: true,
          discardDuplicates: true,
          discardEmpty: true,
          discardOverridden: true,
          discardUnused: true,
          mergeIdents: true,
          mergeLonghand: true,
          mergeRules: false, // <-- !!NEVER ACTIVATE doesn't work with some attributes
          minifyFontValues: true,
          minifyGradients: true,
          minifyParams: true,
          minifySelectors: true,
          normalizeCharset: true,
          normalizeDisplayValues: true,
          normalizePositions: true,
          normalizeRepeatStyle: true,
          normalizeString: true,
          normalizeTimingFunctions: true,
          normalizeUnicode: true,
          normalizeUrl: true,
          normalizeWhitespace: true,
          orderedValues: true,
          reduceIdents: true,
          reduceInitial: true,
          reduceTransforms: true,
          svgo: true,
          uniqueSelectors: true,
          zindex: true,
        }],
      },
    },
  },

  i18n: {
    locales: [
      { name: 'English', code: 'en', iso: 'en-US', file: 'en-US.json' },
      { name: 'Français', code: 'fr', iso: 'fr-FR', file: 'fr-FR.json' },
      { name: 'Deutsch', code: 'de', iso: 'de-DE', file: 'de-DE.json' },
    ],
    langDir: 'node_modules/shared/lang/',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    lazy: true,
  },
});
