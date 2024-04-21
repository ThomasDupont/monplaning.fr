import './rdv.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prise de rendez-vous en ligne',
  description: 'Simplifiez la gestion de votre planning avec notre outil de prise de rendez-vous en ligne.',
  robots: 'noindex, nofollow',
};

export default async function Page() {
  return (
    <div>
      <h1>Mes rendez-vous</h1>
      <p>Pour le client : gestion de ses rendez-vous (à la doctolib)</p>
    </div>
  );
}
