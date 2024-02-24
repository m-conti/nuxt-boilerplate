

/**
 * Give the first value of an array
 * @returns Return the asked value or undefined if the array is empty
 */
export default function<T> (
  this: WithReadonly<T[]>,
): T {
  return this.asindex(0);
}
