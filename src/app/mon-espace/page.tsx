import './mon-espace.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prise de rendez-vous en ligne',
  description: 'Simplifiez la gestion de votre planning avec notre outil de prise de rendez-vous en ligne.',
  robots: 'noindex, nofollow',
};

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <div>
      <h1>Mon espace</h1>
      <p>{"Gestion de l'espace coiffeur, sa page, son abonnement"}</p>
    </div>
  );
}
