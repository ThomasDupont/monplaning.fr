import { fetchHaicutsSlugs, fetchHaircut } from '@/services/haircuts.service';
import { redirect } from 'next/navigation';
import './coiffeurs.scss';
import type { Metadata } from 'next';
import type { HairCutSpaceData } from '@/types/main.types';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Prise de rendez-vous en ligne',
  description: 'Simplifiez la gestion de votre planning avec notre outil de prise de rendez-vous en ligne.',
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const haircuts = await fetchHaicutsSlugs();

  return haircuts.map((slug) => ({ slug }));
}

function HairCutSpace({ data }: { data: HairCutSpaceData }) {
  return (
    <div>
      <h1 className="test">{data.name}</h1>
      <Button rel="nofollow" type="primary" href="/prise-de-rdv?id=1">Prendre rendez-vous</Button>
    </div>
  );
}

export default async function Page({ params }: { params: { slug: string } }) {
  try {
    const hairCutData = await fetchHaircut(params.slug);
    return <HairCutSpace data={hairCutData} />;
  } catch (error) {
    return redirect('/404');
  }
}
