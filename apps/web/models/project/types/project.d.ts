import { Url } from 'models/domains/network';

export {};

declare module '~/models/project' {
  interface StackLanguage {
    name: string;
    version?: string;
    logo: string;
    image?: string;
    description?: string;
  }

  interface Company {
    name: string;
    logo: string;
    link: Url;
  }

  interface Project {
    id: number;
    name: string;
    description?: string;
    images: string[];
    languages: StackLanguage[];
    company?: Company;
    link?: Url;
    start: Date;
    end?: Date;
  }
}
