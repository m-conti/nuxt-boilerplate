
export {};

declare global {
  type Length<T extends WithReadonly<unknown[]>> = T extends { length: infer L } ? L : number;
  type Get<T extends WithReadonly<unknown[]>, N extends number> = T extends [infer U, ...(infer R)] ? N extends 0 ? U : Get<R, Decrement<N>> : never;
  type First<T extends WithReadonly<unknown[]>> = T extends WithReadonly<[infer U, ...unknown[]]> ? U : (T extends (infer U)[] ? IfNotNever<U, U | undefined> : never);
  type Last<T extends WithReadonly<unknown[]>> = T extends WithReadonly<[...unknown[], infer U]> ? U : (T extends (infer U)[] ? IfNotNever<U, U | undefined> : never);
  type OmitFirst<T extends WithReadonly<unknown[]>> = T extends WithReadonly<[unknown, ...(infer U)]> ? U : T extends (infer U)[] ? If<never, U, [], U[]> : [];
  type OmitLast<T extends WithReadonly<unknown[]>> = T extends WithReadonly<[...(infer U), unknown]> ? U : T extends (infer U)[] ? If<never, U, [], U[]> : [];

  type PickN<T extends WithReadonly<unknown[]>, N extends number> = N extends 0 ? [] : T extends [infer U, ...(infer R)] ? [U, ...PickN<R, Decrement<N>>] : T;
}
