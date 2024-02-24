import { isArray } from 'lodash-es';

export {
  flattenDepth,
  flattenDeep,
  orderBy,
  shuffle,
  uniq,
  uniqBy,
} from 'lodash-es';

export const manyToArray = <T extends Object>(data?: Many<T>): T[] => (data ? (isArray(data) ? data : [data]) : []) as any;
