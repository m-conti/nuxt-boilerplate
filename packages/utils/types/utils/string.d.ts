
export {};

declare global {
  type SubString<T extends string, R extends string> = { [K in T]: T extends `${R}${infer Rest}` ? Rest : never; }[T]
}
