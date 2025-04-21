import type { Url } from 'models/interfaces/network';

export {};

declare module 'shared/interfaces/api' {

  interface BaseUrl {
    url: () => Url;
    headerRules?: HeaderRules;
  }
}
