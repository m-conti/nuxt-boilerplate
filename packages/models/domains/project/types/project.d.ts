
export {};

declare module 'models/domains/project' {
  interface StackLanguage {
    name: string;
    version: string;
    image: string;
    description: string;
  }

  interface Project {
    name: string;
    description: string;
    images: string[];
    languages: StackLanguage[];
  }
}
