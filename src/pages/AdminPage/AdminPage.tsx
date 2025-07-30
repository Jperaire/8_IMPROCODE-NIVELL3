import { AddEvent, DeleteEvent } from "./components";

export const AdminPage = () => {
    return (
        <>
            <h2>ADMINISTRATION OPERATIONS</h2>
            <AddEvent />
            <DeleteEvent />
        </>
    );
};
