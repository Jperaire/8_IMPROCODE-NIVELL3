import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firestore";

interface Ubicacions {
    id: string;
    categoria: string;
    lat: number;
    lng: number;
    nom: string;
}

export const MapPage = () => {
    const [ubicacions, setUbicacions] = useState<Ubicacions[]>([]);

    useEffect(() => {
        const fetchUbicacions = async () => {
            const dataImported = await getDocs(collection(db, "lugares"));
            const data = dataImported.docs.map((doc) => ({
                id: doc.id,
                categoria: doc.data().categoria,
                lat: doc.data().lat,
                lng: doc.data().lng,
                nom: doc.data().nom,
            }));
            console.log(data);
            setUbicacions(data);
        };

        fetchUbicacions();
    }, []);

    return (
        <>
            <h1>MapPage</h1>
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Llistat d'Ubicacions</h2>
                <ul className="space-y-2">
                    {ubicacions.map((u) => (
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
