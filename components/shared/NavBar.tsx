import Image from 'next/image'

import { NavItem } from "./NavItem"
import styles from "@/styles/shared/NavBar.module.css";

const NAV_ITEMS = [
    { text: 'Consulting' },
    { text: 'Products' },
    { text: 'Our Approach' },
    { text: 'Case Study' },
    { text: 'Careers' },
    { text: 'Company' },
]

export const NavBar = () => {
    return (
        <div>
            <div className={styles.banner}>
                <div className={styles.title}>Enterprise Digital Solutions</div>

                <div className={styles.languages}>
                    <div></div>
                    <div className={styles.language}>Nihongo</div>
                    <div className={styles.language}>English</div>
                </div>
            </div>

            <nav className={styles.menu}>
                <div className={styles.logo}>
                    <img src="/logo.svg" alt="Scoville Logo" />
                </div>

                <div className={styles.menuitems}>
                    { NAV_ITEMS.map( (item) => (
                        <NavItem label={item.text} />
                    ))}

                    <a className={styles.button}> Inquiry </a>
                </div>
            </nav>
        </div>
    )
}