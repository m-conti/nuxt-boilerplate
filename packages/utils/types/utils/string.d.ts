
export {};

declare global {
  type SubString<T extends string, R extends string> = { [K in T]: T extends `${R}${infer Rest}` ? Rest : never; }[T]
  type RegStr<S extends string = string> = `/${S}/`;
  type Url<S extends string = string> = `https://${S}`;
}
