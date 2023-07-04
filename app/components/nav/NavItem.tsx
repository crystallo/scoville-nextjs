import styles from '@/styles/nav/NavItem.module.css';

interface NavItemProps {
    label: string;
}

export const NavItem = ({ label } : NavItemProps) => {
    return (
        <p className={styles.container}>
            {label}  
            <span className={styles.svg}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></span>
        </p>
    )
}