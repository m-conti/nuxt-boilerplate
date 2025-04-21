import { EHttpMethod, defaults, stringify, toQueryParams } from 'utils';
import type { Url } from 'models/interfaces/network';
import { baseUrls } from '../data/BaseUrls';
import { DEFAULT_HEADER_RULE, buildHeader } from './HeaderRules';
import type { BaseUrl, EndPoint, HeaderRules } from 'shared/interfaces/api';

export interface EndPointConfig {
  method: EHttpMethod;
  baseUrl: BaseUrl;
  body?: any;
  query?: any;
  headers?: any;
  headerRules?: HeaderRules;
}

const DEFAULT_CONFIG: EndPointConfig = {
  method: EHttpMethod.GET,
  baseUrl: baseUrls.api,
};

export const buildEndPoint = <R = any>(path: string, config: Partial<EndPointConfig> = {}): EndPoint<R> => ({
  path,
  config: defaults(config, DEFAULT_CONFIG),
});

export const getUrl = (endPoint: EndPoint): Url => (endPoint.path ? `${endPoint.config.baseUrl.url()}/${endPoint.path}` : endPoint.config.baseUrl.url());
export const getFullUrl = (endPoint: EndPoint): Url => (endPoint.config.query ? `${getUrl(endPoint)}?${toQueryParams(endPoint.config.query)}` : getUrl(endPoint));

const getHeaders = async (endPoint: EndPoint): Promise<Record<string, string>> => await buildHeader({
  ...(endPoint.config.headerRules ?? endPoint.config.baseUrl.headerRules ?? DEFAULT_HEADER_RULE),
});

export const getConfig = async (endPoint: EndPoint) => ({
  method: endPoint.config.method,
  body: stringify(endPoint.config.body),
  query: endPoint.config.query,
  headers: {
    ...await getHeaders(endPoint),
    ...(endPoint.config.headers ?? {}),
  },
});

export const EndPointLib = {
  buildEndPoint,

  getUrl,
  getFullUrl,

  getConfig,
};
