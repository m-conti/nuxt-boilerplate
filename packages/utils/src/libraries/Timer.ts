import Registery from './Registery';

export const setDelay = (delay?: number) => new Promise((resolve) => { Registery.setTimeout(() => { resolve(true); }, delay); });
