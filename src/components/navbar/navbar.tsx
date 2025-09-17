"use client"

import { type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./navbar.module.css"

interface NavbarLinkProps {
    href: string,
    children: ReactNode
}

const NavbarLink = ({
    href,
    children
}: NavbarLinkProps) => {
    const currentPath = usePathname();
    const isActive = currentPath == href;

    return (
        <li className={isActive ? styles.active : ""}>
            <Link href={href}>
                {children}
            </Link>
        </li>
    );
}

interface HomeLinkProps {
    children: ReactNode
}

const HomeLink = ({
    children
}: HomeLinkProps) => {
    return (
        <li className={styles.homeLink}>
            <Link href="/">
                {children}
            </Link>
        </li>
    );
}


interface NavbarLinkParams {
    title: string,
    href: string,
}

interface NavbarProps {
    links: NavbarLinkParams[]
}

const Navbar = ({
    links
}: NavbarProps) => {

    return (
        <nav className={styles.nav}>
            <ul>
                <HomeLink>Pages</HomeLink>
            </ul>
            <ul>
                {
                    links.map((linkParams, index) => {
                        return <NavbarLink href={linkParams.href} key={index}>{linkParams.title}</NavbarLink>
                    })
                }
            </ul>
        </nav>
    )
}

export default Navbar;