import { ofetch } from 'ofetch';
import {
  type InterceptorResponseError,
} from 'shared/interfaces/api/interceptors';


const interceptorResponseErrorBuilder = (interceptors: InterceptorResponseError[]): InterceptorResponseError => async (context) => {
  for (const interceptor of interceptors)
    await interceptor?.(context);
};

export default defineNuxtPlugin({
  order: 12,
  setup: () => {
    globalThis.$fetch = ofetch.create({
      onResponseError: interceptorResponseErrorBuilder([

      ]),
    });
  },
});
