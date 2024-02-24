import type { Url } from 'models/domains/network';

export {};

declare module 'shared/interfaces/api' {

  interface BaseUrl {
    url: () => Url;
    headerRules?: HeaderRules;
  }
}
