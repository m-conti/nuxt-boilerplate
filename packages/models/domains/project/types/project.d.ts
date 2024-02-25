import { Url } from 'models/domains/network';

export {};

declare module 'models/domains/project' {
  interface StackLanguage {
    name: string;
    version?: string;
    logo: string;
    image?: string;
    description?: string;
  }

  interface Project {
    id: number;
    name: string;
    description?: string;
    images: string[];
    languages: StackLanguage[];
    link?: Url;
  }
}
