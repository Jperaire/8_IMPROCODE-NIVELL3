import { AddEvent, DeleteEvent } from "./components";

export const AdminPage = () => {
    return (
        <>
            <header>
                <h2>ADMINISTRATION OPERATIONS</h2>
            </header>

            <section>
                <AddEvent />
                <DeleteEvent />
            </section>
        </>
    );
};
