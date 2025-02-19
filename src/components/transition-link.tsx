"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

type TransitionLinkProps = {
    children: React.ReactNode;
    className?: string;
} & LinkProps;

const TransitionLink = (props: TransitionLinkProps) => {
    const router = useRouter();

    const href = props.href.toString();

    const handleTransition = async (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();

        const body = document.querySelector("body");
        if (!body) return;

        body.style.opacity = "0";

        setTimeout(() => {
            router.push(href);

            setTimeout(() => {
                body.style.opacity = "1";
            }, 200);
        }, 200);
    };

    return (
        <Link {...props} href={href} onClick={handleTransition} className={props.className}>
            {props.children}
        </Link>
    );
};

export { TransitionLink };
