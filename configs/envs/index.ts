
import { fileURLToPath } from 'node:url';
import {
  dirname,
  join,
} from 'node:path';

const initialize = () => {
  const currentDir = dirname(fileURLToPath(import.meta.url));
  process.loadEnvFile(join(currentDir, './.env'));
  return process.env;
};

export const EnvConfig = { initialize };
