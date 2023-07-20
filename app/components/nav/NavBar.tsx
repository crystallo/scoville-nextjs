"use client";

import styles from "@/styles/nav/NavBar.module.css";
import { useState } from "react";
import { NavItem } from "./NavItem";
import { MenuConsulting } from "./MenuConsulting";
import { MenuProducts } from "./MenuProducts";
import { MenuApproach } from "./MenuApproach";
import { MenuCaseStudy } from "./MenuCaseStudy";
import Image from "next/image";

const NAV_ITEMS = [
  { text: "Consulting" },
  { text: "Products" },
  { text: "Our Approach" },
  { text: "Case Study" },
  { text: "Careers" },
  { text: "Company" },
];

export const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState("");

  const renderSubMenu = () => {
    switch (activeMenu) {
      case "Consulting":
        return <MenuConsulting />;
      case "Products":
        return <MenuProducts />;
      case "Our Approach":
        return <MenuApproach />;
      case "Case Study":
        return <MenuCaseStudy />;
      default:
        return null;
    }
  };

  return (
    <header className={styles.container} data-test="nav-bar">
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
          <Image width={100} height={100} src="/logo.svg" alt="Scoville Logo" />
        </div>

        <ul className={styles.menuitems}>
          {NAV_ITEMS.map((item) => (
            <li
              className={styles.menu_item}
              key={item.text}
              onMouseOver={() => setActiveMenu(item.text)}
              onMouseLeave={() => setActiveMenu("")}
            >
              <NavItem label={item.text} />
            </li>
          ))}

          <a className={styles.button}> Inquiry </a>
        </ul>
      </nav>

      <div
        className={styles.sub_menu}
        onMouseOver={() => setActiveMenu(activeMenu)}
        onMouseLeave={() => setActiveMenu("")}
      >
        {renderSubMenu()}
      </div>
    </header>
  );
};
