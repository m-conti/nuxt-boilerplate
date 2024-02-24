import JSCookies from 'js-cookie';
import { errorBoolean, errorWithDefault } from './Error';
import { each, stringify } from './Dictionary';
import { destringify } from './String';
import { timeConvert } from './Time';


export const LocalStorage = {
  set: errorBoolean(<T>(key: string, value: T) => { localStorage.setItem(key, stringify(value)); return true; }),
  get: <T>(key: string, defaultValue?: T): T | undefined => errorWithDefault(() => destringify(localStorage.getItem(key) ?? ''), defaultValue)(),
  getorset: <T>(key: string, defaultValue: T): T | undefined => LocalStorage.get(key) ?? (LocalStorage.set(key, defaultValue) ? defaultValue : undefined),
  remove: errorBoolean((key: string): boolean => { localStorage.removeItem(key); return true; }),
  clear: errorBoolean((): boolean => { localStorage.clear(); return true; }),
};


const cookieConfig = {
  default: <CookieOptions>{
    secure: true,
    sameSite: 'strict',
  },
  write: (value: any): string => stringify(value, false),
  read: (value: string): any => (destringify(value) ?? ''),
};
export const CookieConfig = {
  ...cookieConfig,
  instance: JSCookies.withAttributes(cookieConfig.default).withConverter({ write: cookieConfig.write, read: cookieConfig.read }),
};

export const CookieStorage = {
  set: errorBoolean(<T>(key: string, value: T, options?: Cookies.CookieAttributes & { maxAge?: number }) => {
    if (options?.maxAge) options.expires = timeConvert(options.maxAge, 'second', 'day');
    CookieConfig.instance.set(key, value as any, options?.asomit('maxAge'));
    return true;
  }),
  get: <T>(key: string, defaultValue?: T): T | undefined => (errorWithDefault(() => CookieConfig.instance.get(key) as any, defaultValue)()),
  getAll: () => (CookieConfig.instance.get()),
  getorset: <T>(key: string, defaultValue: T, options?: Cookies.CookieAttributes & { maxAge?: number }): T | undefined => (
    CookieStorage.get(key) ?? (CookieStorage.set(key, defaultValue, options) ? defaultValue : undefined)
  ),
  remove: errorBoolean((key: string, options?: Cookies.CookieAttributes): boolean => { CookieConfig.instance.remove(key, options); return true; }),
  clear: errorBoolean((options?: Cookies.CookieAttributes): boolean => {
    each(CookieConfig.instance.get() as any, (_, key) => { CookieConfig.instance.remove(key, options); }); return true;
  }),
};
