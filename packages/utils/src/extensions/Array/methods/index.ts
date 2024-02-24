
/**
 * Give the n value of an array
 * @returns Return the asked value or undefined if the array is empty
 */
export default function<T, K extends number> (
  this: WithReadonly<T[]>,
  index: K,
): T {
  return this[(this.length + index) % this.length];
}
