import './prise-de-rdv.scss';
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prise de rendez-vous en ligne',
  description: 'Simplifiez la gestion de votre planning avec notre outil de prise de rendez-vous en ligne.',
  robots: 'noindex, nofollow',
};

function Checkout({ id }: { id: string }) {
  return (
    <div>
      <h1 className="test">Prise de rendez-vous</h1>
      <p>
        ID :
        {id}
      </p>
      <p>Etape de prise de rendez-vous</p>
    </div>
  );
}
type Params = {
    params: {}
    searchParams: {
        id?: string
    }
}
export default async function Page(params: Params) {
  const { id } = params.searchParams;
  if (id) {
    return <Checkout id={id} />;
  }

  return redirect('/404');
}
