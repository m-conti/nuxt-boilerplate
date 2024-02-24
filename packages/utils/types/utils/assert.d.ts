export {};

declare global {
  type If<Type, Value, True, False> = [Value] extends [Type] ? True : False;
  type Same<Type, Value, True, False> = If<Type, Value, If<Value, Type, True, False>, False>;
  type Exist<T> = T extends infer R ? R : never;
  type IfNotNever<T, R> = If<never, T, never, R>;
  type IsKnownIterable<T> = KeyOf<T> extends infer K ? Same<string, K, false, Same<number, K, false, true>> : false;
  type IsValidType<T> = T extends undefined ? never : T;
}
