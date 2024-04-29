import { fetchHaicutsSlugs, fetchHaircut } from '@/services/haircuts.service';
import { redirect } from 'next/navigation';
import './coiffeurs.scss';
import type { Metadata } from 'next';
import { HairCutSpace } from './Haircut';

export const metadata: Metadata = {
    title: 'Prise de rendez-vous en ligne',
    description: 'Simplifiez la gestion de votre planning avec notre outil de prise de rendez-vous en ligne.',
};

export const dynamicParams = false;

export async function generateStaticParams() {
    const haircuts = await fetchHaicutsSlugs();

    return haircuts.map((slug) => ({ slug }));
}



export default async function Page({ params }: { params: { slug: string } }) {
    try {
        const hairCutData = await fetchHaircut(params.slug);
        return <HairCutSpace data={hairCutData} />;
    } catch (error) {
        return redirect('/404');
    }
}
