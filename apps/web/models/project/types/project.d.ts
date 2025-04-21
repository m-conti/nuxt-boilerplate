import { Url } from 'models/interfaces/network';
import type { GlobalComponentNameLanguageIcon } from 'ui/types/components';

export {};

declare module '~/models/project' {
  interface StackLanguage {
    name: string;
    version?: string;
    logo: GlobalComponentNameLanguageIcon;
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
    cover?: string;
    images: string[];
    languages: StackLanguage[];
    company?: Company;
    link?: Url;
    start: Date;
    end?: Date;
  }
}
