import type { BaseUrl } from 'shared/interfaces/api';

export const baseUrls = {
  api: <BaseUrl>{
    url: () => 'https://api.example.com',
    headerRules: {
      all: true,
      await: true,
    },
  },
};
