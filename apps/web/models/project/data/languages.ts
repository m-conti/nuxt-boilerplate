import { ELanguage } from '../enums/language';
import type { StackLanguage } from '~/models/project';


export const LANGUAGES: Record<ELanguage, StackLanguage> = {
  [ELanguage.JavaScript]: {
    name: 'JavaScript',
    logo: 'javascript',
    description: 'JavaScript description',
  },
  [ELanguage.TypeScript]: {
    name: 'TypeScript',
    logo: 'typescript',
    description: 'TypeScript description',
  },
  [ELanguage.Django]: {
    name: 'Django',
    logo: 'django',
    description: 'Django description',
  },
  [ELanguage.GoogleCloud]: {
    name: 'Google Cloud',
    logo: 'googlecloud',
    description: 'Google Cloud description',
  },
  [ELanguage.AWS]: {
    name: 'AWS',
    logo: 'aws',
    description: 'AWS description',
  },
  [ELanguage.MongoDB]: {
    name: 'MongoDB',
    logo: 'mongodb',
    description: 'MongoDB description',
  },
  [ELanguage.NodeJS]: {
    name: 'NodeJS',
    logo: 'node',
    description: 'NodeJS description',
  },
  [ELanguage.React]: {
    name: 'React',
    logo: 'react',
    description: 'React description',
  },
  [ELanguage.TailwindCSS]: {
    name: 'Tailwind CSS',
    logo: 'tailwind',
    description: 'Tailwind CSS description',
  },
  [ELanguage.Vue]: {
    name: 'Vue',
    logo: 'vue',
    description: 'Vue description',
  },
  [ELanguage.Webpack]: {
    name: 'Webpack',
    logo: 'webpack',
    description: 'Webpack description',
  },
  [ELanguage.Nuxt]: {
    name: 'Nuxt',
    logo: 'nuxt',
    description: 'Nuxt description',
  },
  [ELanguage.CSS]: {
    name: 'CSS',
    logo: 'css',
    description: 'CSS description',
  },
  [ELanguage.Python]: {
    name: 'Python',
    logo: 'python',
    description: 'Python description',
  },
  [ELanguage.Swift]: {
    name: 'Swift',
    logo: 'swift',
    description: 'Swift description',
  },
  [ELanguage.Shell]: {
    name: 'Shell',
    logo: 'shell',
    description: 'Shell description',
  },
  [ELanguage.PostGreSQL]: {
    name: 'PostGreSQL',
    logo: 'postgresql',
    description: 'PostGreSQL description',
  },
  [ELanguage.WebAssembly]: {
    name: 'WebAssembly',
    logo: 'wasm',
    description: 'WebAssembly description',
  },
};
