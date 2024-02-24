import type { ofetch } from 'ofetch';

export {};

declare module 'shared/interfaces/api/interceptors' {
  type InterceptorResponseError = First<Parameters<typeof ofetch.create>>['onResponseError'];
}