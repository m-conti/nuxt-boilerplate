import { omit, pick } from 'utils';
import { EHeaderKey } from '../enums/HeaderKey';
import type { HeaderRules, HeaderRulesWithAll, HeaderRulesWithoutAll } from 'shared/interfaces/api';

export const DEFAULT_HEADER_RULE: HeaderRules = {
  accept: [],
  all: false,
  await: false,
};

const makeHeaders = (_rule: HeaderRules): Partial<Record<EHeaderKey, any>> => {
  const headers: Partial<Record<EHeaderKey, any>> = {};

  return headers;
};


export const buildHeader = async (rule: HeaderRules): Promise<Record<string, string>> => {

  if (!(rule.all || (rule as HeaderRulesWithoutAll).accept?.length)) return {};

  if (rule.await)
    await deviceInitialized.value;

  const headers = makeHeaders(rule);

  if (rule.all) return omit(headers, (rule as HeaderRulesWithAll).except ?? []);
  return pick(headers, (rule as HeaderRulesWithoutAll).accept ?? []);
};
