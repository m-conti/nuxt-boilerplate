const isProd = process.env.NODE_ENV === 'production';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    [ 'shared/nuxt.ts', { currentPaths: ['~'], types: [ 'utils', 'models', 'shared', 'ui' ]}],
    '@nuxtjs/i18n',
    [ 'nuxt-typed-router', { strict: false }],
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-gtag',
    'ui',
    'ui/modules/typed-globals.ts',
  ],
  plugins: [
    'shared/directives/active-on-click.ts',
  ],


  // DIRECTORY NAME
  components: [
    { path: '~/components', pathPrefix: false, extensions: ['.vue']},
  ],

  imports: {
    dirs: [ 'stores', 'composables' ],
  },

  dir: {
    middleware: 'middlewares',
  },

  // HTML
  app: {
    pageTransition: {
      mode: 'out-in',
      name: 'page',
      type: 'transition',
      duration: 200,
    },
    layoutTransition: {
      mode: 'out-in',
      name: 'layout',
      type: 'transition',
      duration: 200,
    },
  },

  // STYLES
  css: [
    'ui/assets/css/display-fix.css',
    'ui/assets/css/main.css',
    'ui/assets/css/transitions.css',
    'ui/assets/css/animations.css',
    'ui/assets/css/partials/buttons.css',
    'ui/assets/css/partials/duration.css',
    'ui/assets/css/partials/fonts.css',
    'ui/assets/css/partials/text.css',
    'ui/assets/css/partials/player.css',
    'ui/assets/css/partials/rules.css',
    'ui/assets/css/partials/uhd.css',
  ],
  postcss: {
    plugins: {
      'postcss-import': {},
      'postcss-simple-vars': {
        variables: {
          ...require('ui/postcss/color'),
          ...require('ui/postcss/opacity'),
          ...require('ui/postcss/text'),
          ...require('ui/postcss/texture'),
          ...require('ui/postcss/preset-mode'),
          ...require('ui/postcss/media-query'),
        },
      },
      'postcss-mixins': { mixinsDir: 'node_modules/ui/assets/css/mixins' },
      'postcss-nested': {},
      'postcss-conditionals': {},
      'postcss-each': {},
      'postcss-for': {},
      'postcss-inline-media': {},
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

  // LANGS
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

  // BUILD
  build: {
    transpile: [
      /ui/,
      /utils/,
      /models/,
      /shared/,
      /nuxt/,
      /vue/,
    ],
  },
  telemetry: false,
});
