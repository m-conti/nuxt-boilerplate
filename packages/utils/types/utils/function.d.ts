
export {};

declare global {
  type OmitFirstArg<F extends (...args: any) => any> = F extends (x: any, ...args: infer P) => infer R ? (...args: P) => R : never;
  type ParametersOmitFirst<F extends (...args: any) => any> = OmitFirst<Parameters<F>>;
}
