import { map } from 'lodash-es';

export const stringify = (data: any, safe: boolean = true) => (safe || (typeof data !== 'string') ? JSON.stringify(data) : data);

export const toQueryParams = (dict: object) => (map(dict as any, (value, key) => `${encodeURIComponent(key)}=${encodeURIComponent(stringify(value))}`).join('&'));

export {
  reduce,
  reduceRight,
  map,
  mapKeys,
  mapValues,
  merge,
  mergeWith,
  defaultsDeep,
  defaults,
  cloneDeep,
  omit,
  omitBy,
  pick,
  pickBy,
  keys,
  findKey,
  find,
  filter,
  each,
  eachRight,
  get,
  set,
  size,
  groupBy,
} from 'lodash-es';

