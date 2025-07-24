import { Route, Routes } from "react-router-dom";
import { CalendarPage, HomePage, MapPage, NotFound } from "../pages";
import { Layout } from "../components";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/calendar" element={<CalendarPage />} />
                    <Route path="/map" element={<MapPage />} />
                    {/* <Route path="/chart" element={<ChartPage />} /> */}
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
};
