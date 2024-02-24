
export { };

declare global {
  type Dictionary<T = unknown> = Record<any, T> | T[] | ReadonlyArray<T>;

  // PROTECTED
  type OmitProtected<T, K extends unknown> = K extends keyof T ? Omit<T, K> : never;
  type PickProtected<T, K extends unknown> = K extends keyof T ? Pick<T, K> : never;
  type KeyProtected<K> = K extends string | number ? K : never;
  type IsKeyOf<T, K> = K extends keyof T ? K : never;

  // UTILS
  type OmitValue<T, V> = Pick<T, { [K in KeyOf<T>]: If<V, T[K], never, K> }[KeyOf<T>]>;
  type PickValue<T, V> = Pick<T, { [K in KeyOf<T>]: If<V, T[K], K, never> }[KeyOf<T>]>;
  type PickDict<T> = Pick<T, KeyDictOf<T>>;

  // SELECTOR
  type KeyOf<T> = IsValidType<IsKeyOf<T, T extends unknown[] ? number : T extends ReadonlyArray<unknown> ? ToNumber<Exclude<keyof T, keyof []>> : T extends Object ? Exclude<keyof T, keyof Object> : keyof T>>;
  type KeyDictOf<T> = { [K in KeyOf<T>]: (T[K] extends Dictionary<unknown> | undefined ? (IsValidType<T[K]> extends never ? never : K) : never) }[KeyOf<T>];
  type NonKeyDictOf<T> = Exclude<KeyOf<T>, KeyDictOf<T>>;
  type ValueOf<T> = T extends Record<any, infer U> ? U : T extends Dictionary<infer U> ? U : T extends object ? T[keyof T] : never;
  type ValueDictOf<T> = PickDict<T> extends infer U ? U[KeyOf<U>] : never;

  // FLATMAP
  // type KeyKnownIterable<T> = { [K in KeyOf<T>]: IsKnownIterable<T[K]> extends false ? never : K }[KeyOf<T>]
  type FlattenWithoutDict<T> = Omit<T, KeyDictOf<T>> & UnionToIntersection<ValueDictOf<T>>;

  // In this way we can't get a not known iterable ... like array or records
  type DeepFlat<T, Del extends string, Path extends string = ''> = FlattenWithoutDict<NonKeyDictOf<T> extends infer Property ? { [K in KeyOf<T> as `${Path}${KeyProtected<K>}`]: K extends Property ? T[K] : IsKnownIterable<T[K]> extends false ? T[K] : DF2<T[K], Del, `${Path}${KeyProtected<K>}${Del}`> } : never>;
  type DF2<T, Del extends string, Path extends string> = FlattenWithoutDict<NonKeyDictOf<T> extends infer Property ? { [K in KeyOf<T> as `${Path}${KeyProtected<K>}`]: K extends Property ? T[K] : IsKnownIterable<T[K]> extends false ? T[K] : DF3<T[K], Del, `${Path}${KeyProtected<K>}${Del}`> } : never>;
  type DF3<T, Del extends string, Path extends string> = FlattenWithoutDict<NonKeyDictOf<T> extends infer Property ? { [K in KeyOf<T> as `${Path}${KeyProtected<K>}`]: K extends Property ? T[K] : IsKnownIterable<T[K]> extends false ? T[K] : DF4<T[K], Del, `${Path}${KeyProtected<K>}${Del}`> } : never>;
  type DF4<T, Del extends string, Path extends string> = FlattenWithoutDict<NonKeyDictOf<T> extends infer Property ? { [K in KeyOf<T> as `${Path}${KeyProtected<K>}`]: K extends Property ? T[K] : IsKnownIterable<T[K]> extends false ? T[K] : DF5<T[K], Del, `${Path}${KeyProtected<K>}${Del}`> } : never>;
  type DF5<T, Del extends string, Path extends string> = FlattenWithoutDict<NonKeyDictOf<T> extends infer Property ? { [K in KeyOf<T> as `${Path}${KeyProtected<K>}`]: K extends Property ? T[K] : IsKnownIterable<T[K]> extends false ? T[K] : DF6<T[K], Del, `${Path}${KeyProtected<K>}${Del}`> } : never>;
  type DF6<T, _ extends string, Path extends string> = { [K in KeyOf<T> as `${Path}${KeyProtected<K>}`]: T[K] };

}
