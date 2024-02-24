import type { EHeaderKey } from '../enums/HeaderKey';

export {};

declare module 'shared/interfaces/api' {
  interface HeaderRulesWithAll {
    except?: EHeaderKey[];
    all: true;
    await: boolean;
  }

  interface HeaderRulesWithoutAll {
    accept?: EHeaderKey[];
    all: false;
    await: boolean;
  }

  type HeaderRules = HeaderRulesWithAll | HeaderRulesWithoutAll;
}