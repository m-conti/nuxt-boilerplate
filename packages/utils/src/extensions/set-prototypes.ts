import { map, set } from '../libraries/Dictionary';

type FunctionModule = Record<string, Function>;
type Classes<T = unknown> = {
  prototype?: any;
  defineProperty?: (o: T, p: PropertyKey, attributes: PropertyDescriptor & ThisType<any>) => T;
};

const METHODS_PREFIX = 'as';

export const setPrototypes = (Set: Classes, methods: FunctionModule): void => {
  map<Function>(methods, (elem: Function, name: string) => {
    const methodName = `${METHODS_PREFIX}${name}`;
    try { Set.defineProperty?.(Set.prototype, methodName, { value: elem }); }
    catch (e) { console.error(e); }
    if (!(methodName in Set.prototype))
      set(Set.prototype, methodName, elem);
  });
};
