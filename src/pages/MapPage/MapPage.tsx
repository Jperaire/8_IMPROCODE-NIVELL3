import { useContext } from "react";
import { EventsContext } from "../../context/EventsContext";

export const MapPage = () => {
    const context = useContext(EventsContext);

    if (!context || context.loading) {
        return <p>Loading...</p>;
    }

    const { events } = context;

    return (
        <>
            <h2>MAP</h2>
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Llistat d'Ubicacions</h2>
                <ul className="space-y-2">
                    {events?.map((u) => (
                        <li key={u.id} className="border p-2 rounded shadow">
                            <strong>{u.name}</strong>
                            Edad: {u.id}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};
