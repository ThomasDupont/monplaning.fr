import type { HairCutSpaceData } from '@/types/main.types';
import {
  fetchHaicutsSlugs_TEST,
  fetchHaircut_TEST,
} from './haircut.service.test';

const env = 'TEST';

const fetchHaicutsSlugs_PROD = async () => Promise.resolve(['coiffeur-1', 'coiffeur-2', 'coiffeur-3']);

const fetchHaircut_PROD = (slug: string): Promise<HairCutSpaceData> => fetchHaicutsSlugs_PROD().then((slugs) => {
  if (slugs.includes(slug)) {
    return Promise.resolve({
      id: 1,
      name: 'Coupe coupe tiff',
      ville: 'Paris',
      address: '12 rue de la paix',
      phone: '0123456789',
      services: [],
    });
  }
  return Promise.reject('Not found');
});

export const fetchHaicutsSlugs = env === 'TEST' ? fetchHaicutsSlugs_TEST : fetchHaicutsSlugs_PROD;
export const fetchHaircut = env === 'TEST' ? fetchHaircut_TEST : fetchHaircut_PROD;
