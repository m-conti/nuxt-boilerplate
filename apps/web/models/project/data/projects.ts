import { COMPANIES } from './companies';
import { LANGUAGES } from './languages';
import type { Project } from '~/models/project';

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Sky STV application',
    description: 'Sky STV application',
    images: [ 'Sky/STV/01.png', 'Sky/STV/02.png', 'Sky/STV/03.png', 'Sky/STV/04.png', 'Sky/STV/05.png' ],
    languages: [
      LANGUAGES.Nuxt,
      LANGUAGES.Vue,
    ],
    company: COMPANIES.SkyCH,
    start: new Date('2021-08-06'),
    link: 'https://stv.prd.sky.ch/',
  },
  {
    id: 2,
    name: 'Office Riders',
    description: 'Office Riders client application',
    images: [ 'OfficeRiders/01.png', 'OfficeRiders/02.png', 'OfficeRiders/03.png', 'OfficeRiders/04.png', 'OfficeRiders/05.png' ],
    languages: [
      LANGUAGES.React,
      LANGUAGES.MongoDB,
    ],
    company: COMPANIES.SkyCH,
    start: new Date('2021-08-06'),
    link: 'https://www.officeriders.com/',
  },
];
