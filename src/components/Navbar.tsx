import type { ReactNode } from "react"
import { Link, useMatch, useResolvedPath } from "react-router"

import styles from './Navbar.module.css'

interface NavbarLinkProps {
    to: string,
    children: ReactNode,
    props?: any[],
}

const NavbarLink = ({
    to,
    children,
    ...props
}: NavbarLinkProps) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    console.log("heyo");
    return (
        <li className={isActive ? styles.active : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
};

const Navbar = () => {
    console.log("hi");
    return (
        <nav className={styles.nav}>
            <Link to="/" className="siteTitle">
                Pages
            </Link>
            <ul>
                <NavbarLink to="/">Home</NavbarLink>
                <NavbarLink to="/about">About</NavbarLink>
            </ul>
        </nav>
    )
}

export default Navbar