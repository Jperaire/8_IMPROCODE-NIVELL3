import { Route, Routes } from "react-router-dom";
import {
    CalendarPage,
    GraficsPage,
    HomePage,
    MapPage,
    NotFound,
} from "../pages";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/map" element={<MapPage />} />
                <Route path="/grafics" element={<GraficsPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};
