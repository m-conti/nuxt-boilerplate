import { readdirSync, statSync } from 'fs';
import { join } from 'path';
import { defineNuxtModule, addTypeTemplate } from '@nuxt/kit';
import { upperFirst, camelCase } from 'lodash-es';

interface ComponentList {
  name: string;
  components: string[];
}

const TEMPLATE_NAME = 'types/global-components.d.ts';
const GLOBAL_DIR = join(__dirname, '../global');

const getComponentListByFolder = (name: string, path: string) => {
  const components = readdirSync(path).filter((file) => file.endsWith('.vue'));
  return components.map((component) => (component.replace(new RegExp(`^${name}-(.*).vue$`), '$1')));
};

const getGlobalComponentList = () => {
  const folders = readdirSync(GLOBAL_DIR).filter((file) => statSync(join(GLOBAL_DIR, file)).isDirectory());
  return folders.map((folder) => ({
    name: folder,
    components: getComponentListByFolder(folder, join(GLOBAL_DIR, folder)),
  }));
};

const listToTypescriptType = (list: ComponentList) => (
  `  type GlobalComponentName${upperFirst(camelCase(list.name))} = ${list.components.map((component) => `'${component}'`).join(' | ')};`
);

const typescriptTypesToExport = (types: string) => `
// Generated by typed-global

export {};

declare module 'ui/types/components' {
${types}
}
`;

export default defineNuxtModule({
  setup() {
    const data = getGlobalComponentList();
    const content = typescriptTypesToExport(data.map(listToTypescriptType).join('\n'));

    addTypeTemplate({
      filename: TEMPLATE_NAME,
      getContents: () => content,
    });
  },
});
