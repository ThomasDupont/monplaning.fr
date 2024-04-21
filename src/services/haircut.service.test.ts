import type { HairCutSpaceData } from '@/types/main.types';

export const fetchHaicutsSlugs_TEST = async () => Promise.resolve(['coiffeur-1', 'coiffeur-2', 'coiffeur-3']);

export const fetchHaircut_TEST = (slug: string): Promise<HairCutSpaceData> => fetchHaicutsSlugs_TEST().then((slugs) => {
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
