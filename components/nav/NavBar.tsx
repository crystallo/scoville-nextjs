"use client";

import { useState } from 'react';
import { NavItem } from "./NavItem"
import styles from "@/styles/nav/NavBar.module.css";
import { MenuConsulting } from './MenuConsulting';

const NAV_ITEMS = [
    { text: 'Consulting' },
    { text: 'Products' },
    { text: 'Our Approach' },
    { text: 'Case Study' },
    { text: 'Careers' },
    { text: 'Company' },
]

export const NavBar = () => {
    const [ activeMenu, setActiveMenu ] = useState('');

    const renderSubMenu = () => {
        switch (activeMenu) {
            case "Consulting":
                return <MenuConsulting />;
            default:
                return null;
        }
    };

    return (
        <div className={styles.container}>
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
                        <div 
                            className={styles.menu_item}
                            key={item.text}
                            onMouseOver={ () => setActiveMenu(item.text) }
                            onMouseLeave={ () => setActiveMenu('') }
                        >
                            <NavItem label={item.text} />
                        </div>
                        
                    ))}

                    <a className={styles.button}> Inquiry </a>
                </div>
            </nav>

            <div 
                className={styles.sub_menu}
                onMouseOver={ () => setActiveMenu(activeMenu) }
                onMouseLeave={ () => setActiveMenu('') }
            >
                {renderSubMenu()}
            </div>
        </div>
    )
}

