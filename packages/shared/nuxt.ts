/* eslint-disable fp/no-delete */
/* eslint-disable fp/no-mutating-methods */
// https://nuxt.com/docs/api/configuration/nuxt-config
import { join } from 'path';
import { defineNuxtModule } from '@nuxt/kit';
import { uniq } from 'utils';

export default defineNuxtModule({
  meta: {
    defaults: {
      currentPaths: ['~'],
      types: [ 'utils', 'models', 'shared/types', 'ui/types' ],
    },
  },
  setup({ currentPaths, types }, nuxt) {

    // add composables / store / hooks from shared to project
    nuxt.hook('imports:dirs', (dirs) => {
      dirs.push(join(__dirname, 'composables'));
      dirs.push(join(__dirname, 'stores'));
      dirs.push(join(__dirname, 'hooks'));
    });

    // add component to project
    nuxt.hook('components:dirs', (dirs) => {
      dirs.push({ path: join(__dirname, 'components'), pathPrefix: false, extensions: ['.vue']});
    });

    // add package path file import logic
    nuxt.hook('prepare:types', ({ tsConfig }) => {
      tsConfig.compilerOptions = tsConfig.compilerOptions ?? {};
      const baseUrl = '..';
      const aliasesToRemove = [ '~~', '~~/*', '@@', '@@/*', '@', '@/*', '~', '~/*' ];
      const paths = tsConfig?.compilerOptions?.paths;
      for (const alias of aliasesToRemove)
        if (paths[alias])
          delete paths[alias];
      for (const path of currentPaths) {
        paths[path] = [baseUrl];
        paths[`${path}/*`] = [`${baseUrl}/*`];
      }
      tsConfig!.compilerOptions.esModuleInterop = true;
    });

    // add types of packages to project
    nuxt.hook('prepare:types', ({ tsConfig, declarations }) => {
      tsConfig.include = uniq([
        ...(tsConfig.include ?? []),
        ...types.map((type: string) => `../../../packages/${type}`),
      ]);
      tsConfig!.compilerOptions!.types = uniq([
        ...(tsConfig!.compilerOptions!.types ?? []),
        '@nuxt/types',
        '@nuxtjs/i18n',
      ]);
      tsConfig!.compilerOptions!.skipLibCheck = false;

      declarations.push(...types.map((type: string) => `/// <reference path="../../../packages/${type}" />`));

      // add libs
      tsConfig!.compilerOptions!.lib = uniq([ ...(tsConfig!.compilerOptions!.lib ?? []), 'DOM', 'ESNext' ]);
    });
  },
});
