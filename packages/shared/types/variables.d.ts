import type { Url } from 'models/domains/network';

export {};

declare module 'nuxt/schema' {

  interface RuntimeConfig {

  }
  interface PublicRuntimeConfig {
    baseUrls: {
      api: Url;
      auth: Url;
    };
    version: string;
    cookie: {
      domain: string;
    }
  }
}