import Link from 'next/link';

type Props = {
    rel: string
    children: string
    href: string
    type: 'primary' | 'secondary'
    target?: string
}
export function Button(props: Props) {
  const target = props.target ?? '_blank';
  return (
    <button className={props.type === 'primary' ? 'button-primary' : 'button-secondary'}>
      <Link rel={props.rel} target={target} href={props.href}>{props.children}</Link>
    </button>
  );
}
