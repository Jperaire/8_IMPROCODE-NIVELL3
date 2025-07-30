import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import { settings, map, calendar, chart } from "../../assets/images";

export const HomePage = () => {
    return (
        <section className={styles.container}>
            <header>
                <h1 className={styles.title}>WELCOME TO EVENT MANAGER</h1>
            </header>

            <article className={styles.cardGrid}>
                <div className={styles.card}>
                    <img
                        src={calendar}
                        alt="Calendar"
                        className={styles.image}
                    />
                    <h3>Calendar View</h3>
                    <p>See all events in a calendar format</p>
                    <Link to="/calendar" className={styles.button}>
                        Go
                    </Link>
                </div>
                <div className={styles.card}>
                    <img src={chart} alt="Chart" className={styles.image} />
                    <h3>Chart Analysis</h3>
                    <p>Explore events by category in charts</p>
                    <Link to="/chart" className={styles.button}>
                        Go
                    </Link>
                </div>
                <div className={styles.card}>
                    <img src={map} alt="Map" className={styles.image} />
                    <h3>Map View</h3>
                    <p>Locate events on an interactive map</p>
                    <Link to="/map" className={styles.button}>
                        Go
                    </Link>
                </div>
                <div className={styles.card}>
                    <img src={settings} alt="Admin" className={styles.image} />
                    <h3>Admin Panel</h3>
                    <p>Add or delete events</p>
                    <Link to="/admin" className={styles.button}>
                        Go
                    </Link>
                </div>
            </article>
        </section>
    );
};
