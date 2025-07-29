import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <nav className={`${styles.navbar} mb-3`}>
            <div className="container d-flex gap-4">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? `${styles.link} ${styles.active}`
                            : styles.link
                    }
                >
                    HOME
                </NavLink>
                <NavLink
                    to="/calendar"
                    className={({ isActive }) =>
                        isActive
                            ? `${styles.link} ${styles.active}`
                            : styles.link
                    }
                >
                    CALENDAR
                </NavLink>
                <NavLink
                    to="/chart"
                    className={({ isActive }) =>
                        isActive
                            ? `${styles.link} ${styles.active}`
                            : styles.link
                    }
                >
                    CHARTS
                </NavLink>
                <NavLink
                    to="/map"
                    className={({ isActive }) =>
                        isActive
                            ? `${styles.link} ${styles.active}`
                            : styles.link
                    }
                >
                    MAP
                </NavLink>
            </div>
        </nav>
    );
};
