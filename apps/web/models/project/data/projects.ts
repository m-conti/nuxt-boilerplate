import { COMPANIES } from './companies';
import { LANGUAGES } from './languages';
import type { Project } from '~/models/project';

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Sky STV application',
    description: 'Sky STV application',
    cover: '/images/company/Sky/STV/00.png',
    images: [
      '/images/company/Sky/STV/01.png',
      '/images/company/Sky/STV/02.png',
      '/images/company/Sky/STV/03.png',
      '/images/company/Sky/STV/04.png',
      '/images/company/Sky/STV/05.png',
    ],
    languages: [
      LANGUAGES.Nuxt,
      LANGUAGES.Vue,
      LANGUAGES.TypeScript,
      LANGUAGES.Bitmovin,
      LANGUAGES.Shell,
      LANGUAGES.AWS,
      LANGUAGES.PostCSS,
      LANGUAGES.TailwindCSS,
    ],
    company: COMPANIES.SkyCH,
    start: new Date('2021-08-06'),
    link: 'https://stv.prd.sky.ch/',
  },
  {
    id: 2,
    name: 'Office Riders',
    description: 'Office Riders client application',
    cover: '/images/company/OfficeRiders/00.png',
    images: [
      '/images/company/OfficeRiders/01.jpeg',
      '/images/company/OfficeRiders/02.jpeg',
      '/images/company/OfficeRiders/03.jpeg',
    ],
    languages: [
      LANGUAGES.React,
      LANGUAGES.MongoDB,
    ],
    company: COMPANIES.SkyCH,
    start: new Date('2021-08-06'),
    link: 'https://www.officeriders.com/',
  },
];
