import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
    return (
        <nav className={`navbar navbar-dark custom-navbar`}>
            <div className="container-fluid">
                <div className="navbar-brand custom-navbar-brand">
                    EVENTS IN THE CITY
                </div>
                <button
                    className="navbar-toggler custom-navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto gap-2 align-items-center m-3">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `nav-link custom-nav-link ${
                                        isActive ? "active" : ""
                                    }`
                                }
                            >
                                HOME
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/calendar"
                                className={({ isActive }) =>
                                    `nav-link custom-nav-link ${
                                        isActive ? "active" : ""
                                    }`
                                }
                            >
                                CALENDAR
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/chart"
                                className={({ isActive }) =>
                                    `nav-link custom-nav-link ${
                                        isActive ? "active" : ""
                                    }`
                                }
                            >
                                CHARTS
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/map"
                                className={({ isActive }) =>
                                    `nav-link custom-nav-link ${
                                        isActive ? "active" : ""
                                    }`
                                }
                            >
                                MAP
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/admin"
                                className={({ isActive }) =>
                                    `nav-link custom-nav-link ${
                                        isActive ? "active" : ""
                                    }`
                                }
                            >
                                ADMIN
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
