import { Button } from '@/components/Button';
import { fetchHaicutsSlugs } from '@/services/haircuts.service';

export default async function Page() {
  const slugs = await fetchHaicutsSlugs();
  return (
    <div>
      <h1>Coiffeurs</h1>
      <h2>Liste des coiffeurs</h2>
      <ul>
        {slugs.map((slug) => (
          <li key={slug}>
            <Button rel="nofollow" type="primary" href={`/coiffeurs/${slug}`}>slug</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
