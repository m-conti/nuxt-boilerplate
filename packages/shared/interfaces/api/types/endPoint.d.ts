import type { EHttpMethod } from 'models/constants/requests';

export {};

declare module 'shared/interfaces/api' {
  interface EndPointConfig {
    method: EHttpMethod;
    baseUrl: BaseUrl;
    body?: any;
    query?: any;
    headers?: any;
    headerRules?: HeaderRules;
  }

  interface EndPoint<R = any> {
    path: string;
    config: EndPointConfig;
  }

  type EndPointReturn<E> = E extends EndPoint<infer R> ? R : any;
}
