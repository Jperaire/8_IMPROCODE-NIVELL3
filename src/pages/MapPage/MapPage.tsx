import { useContext } from "react";

import { UbicacionsContext } from "../../context/UbicacionsContext";

export const MapPage = () => {
    const context = useContext(UbicacionsContext);

    if (!context || context.loading) {
        return <p>Loading...</p>;
    }

    const { ubicacions } = context;

    return (
        <>
            <h1>MapPage</h1>
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Llistat d'Ubicacions</h2>
                <ul className="space-y-2">
                    {ubicacions?.map((u) => (
                        <li key={u.id} className="border p-2 rounded shadow">
                            <strong>{u.nom}</strong>
                            Edad: {u.id}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};
