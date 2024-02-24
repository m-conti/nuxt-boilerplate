import {
  camelCase,
  capitalize,
  kebabCase,
  macroCase,
  pascalCase,
  snakeCase,
  startCase,
} from '../../../libraries/String';

const cases = {
  'pascal': pascalCase,
  'camel': camelCase,
  'snake': snakeCase,
  'start': startCase,
  'kebab': kebabCase,
  'upper': (string: string) => string.toUpperCase(),
  'lower': (string: string) => string.toLowerCase(),
  'capitalize': capitalize,
  'macro': macroCase,
};

/**
 * @description Modify the string to make it fit the format given
 *
 * @param {string} this the string that will be modified
 *
 * @param {A} select the format that the string will be turned into :
 *    - 'pascal' : string will be in pascal case
 *           Ex: "Foo Bar" --> "FooBar"
 *    - 'camel' : string will be in camel case
 *           Ex: "Foo Bar" --> "fooBar"
 *    - 'snake' : string will be in snake case
 *           Ex: "Foo Bar" --> "foo_bar"
 *    - 'start' : each word of the string will start by a capital letter
 *           Ex: "foo-bar" --> "Foo Bar"
 *    - 'kebab' : string will be in kebab case
 *           Ex: "Foo Bar" --> "foo-bar"
 *    - 'upper' : the string will be capitalized
 *           Ex: "Foo Bar" --> "FOO BAR"
 *    - 'lower' : the string will be in lower case
 *           Ex: "FOO BAR" --> "foo bar"
 *    - 'capitalize' : the first char of a string will be capitalized
 *           Ex: "Foo Bar" --> "Foo bar"
 *    - 'macro' : will turn the string into capitalized and snake case
 *           Ex: "Foo Bar" --> "FOO_BAR"
 *
 * @returns {string} Return the modified string in the given format
 *
 * @see {@link https://lodash.com/docs/4.17.15#camelCase | lodash camelCase}
 * @see {@link https://lodash.com/docs/4.17.15#snakeCase | lodash snakeCase}
 * @see {@link https://lodash.com/docs/4.17.15#startCase | lodash startCase}
 * @see {@link https://lodash.com/docs/4.17.15#kebabCase | lodash kebabCase}
 * @see {@link https://lodash.com/docs/4.17.15#upperCase | lodash upperCase}
 * @see {@link https://lodash.com/docs/4.17.15#lowerCase | lodash lowerCase}
 */
export default function <C extends keyof typeof cases> (
  this: string,
  select: C = 'lower' as C,
): string {
  return cases[select]?.(this) ?? this;
}
