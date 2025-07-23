import { Route, Routes } from "react-router-dom";
import {
    CalendarPage,
    GraficsPage,
    HomePage,
    MapPage,
    NotFound,
} from "../pages";
import { Layout } from "../components";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/calendar" element={<CalendarPage />} />
                    <Route path="/map" element={<MapPage />} />
                    <Route path="/grafics" element={<GraficsPage />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
};
