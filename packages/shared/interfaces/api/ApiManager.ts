import { endPoints } from './data/EndPoints';
import { getUrl, getConfig } from './libraries/EndPoint';
import type { EndPointReturn, EndPoint } from 'shared/interfaces/api';

const call = async <T extends keyof typeof endPoints>(
  route: T,
  ...parameters: Parameters<typeof endPoints[T]>
): ReturnType<typeof $fetch<EndPointReturn<ReturnType<typeof endPoints[T]>>>> => {
  const endPoint: EndPoint = (endPoints[route] as any)(...parameters ?? []);
  return $fetch(getUrl(endPoint), await getConfig(endPoint)) as any;
};

export const ApiManager = {
  call,
};
