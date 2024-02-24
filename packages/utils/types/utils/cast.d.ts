
export {};

declare global {
  type ToNumber<T> = T extends `${infer U extends number}` ? U : T;
  type ToString<T> = T extends string | number | bigint | boolean ? `${T}` : T;
}
