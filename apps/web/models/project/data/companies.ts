import { ECompany } from '../enums/companies';
import type { Company } from '~/models/project';


export const COMPANIES: Record<ECompany, Company> = {
  [ECompany.SkyCH]: {
    name: 'Sky CH',
    logo: 'sky',
    link: 'https://www.sky.ch/',
  },
};
