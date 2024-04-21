import './globals.scss';
import Link from 'next/link';
import localFont from 'next/font/local';

// Font files can be colocated inside of `app`
const oswald = localFont({
  src: '../fonts/Oswald/Oswald-VariableFont_wght.ttf',
  display: 'swap',
  variable: '--oswald',
});

const source = localFont({
  src: '../fonts/source-sans-pro-v21-latin/source-sans-pro-v21-latin-regular.woff2',
  display: 'swap',
  variable: '--source',
});

function Header() {
  return (
    <header>
      <nav className="main-nav">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/coiffeurs">Liste coiffeur</Link>
          </li>
          <li>
            <Link href="/mes-rendez-vous">Mes rendez-vous</Link>
          </li>
          <li>
            <Link href="/mon-espace">Mon espace</Link>
          </li>
          <li>
            <Link href="/mon-planning">Mon planning</Link>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${oswald.className} ${source.className}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
