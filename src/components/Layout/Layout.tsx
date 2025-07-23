import { Outlet } from "react-router-dom";
import { Navbar } from "..";

export const Layout = () => {
    return (
        <div>
            <Navbar />
            <main>
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};
