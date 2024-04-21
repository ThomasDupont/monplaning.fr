import Link from 'next/link';

type Props = {
    rel: string
    children: string
    href: string
    type: 'primary' | 'secondary'
}
export function Button(props: Props) {
    return (
        <Link rel={props.rel} href={props.href}>
            <button className={props.type === 'primary' ? 'button-primary' : 'button-secondary'}>
                {props.children}
            </button>
        </Link>
    );
}
