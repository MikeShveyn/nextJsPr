import Link from "next/link"
import Image from "next/image"
import logoImg from '@/assets/logo.png'
import styles from './main-header.module.css'
import MainHeaderBackgroun from '@/components/main-header/main-header-background';
import NavLink from "./nav-link";


export default function MainHeader() {
    return <>
      <MainHeaderBackgroun/>  
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
            <Image src={logoImg} priority alt="A plate with food on it"/>
            NextLevel Food
        </Link>

        <nav className={styles.nav}>
            <ul>
                <li>
                   <NavLink href="/meals">Browse Meals</NavLink>
                </li>
                <li>
                    <NavLink href="/community">Foodies Community</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    </>
   
}