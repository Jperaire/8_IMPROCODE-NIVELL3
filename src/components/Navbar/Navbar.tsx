import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/calendar"
                className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                }
            >
                Calendar
            </NavLink>
            <NavLink
                to="/grafics"
                className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                }
            >
                Grafics
            </NavLink>
            <NavLink
                to="/map"
                className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                }
            >
                Map
            </NavLink>
        </nav>
    );
};
