import type { Values as TestValues } from './test';

export interface Injections {
  vTest: DirectiveFunction<TestValues>;
}
