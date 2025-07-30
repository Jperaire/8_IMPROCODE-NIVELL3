import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

export const Layout = () => {
    return (
        <div>
            <Navbar />
            <main>
                <div className="container">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
};
