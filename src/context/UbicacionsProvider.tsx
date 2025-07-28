// src/context/UbicacionsProvider.tsx
import React, { useState, useEffect } from "react";
import { UbicacionsContext } from "./UbicacionsContext";
import { Ubicacions } from "../types/Ubicacions";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firestore";

export const UbicacionsProvider: React.FC = ({ children }) => {
    const [ubicacions, setUbicacions] = useState<Ubicacions[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, "lugares"), (snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                categoria: doc.data().categoria,
                lat: doc.data().lat,
                lng: doc.data().lng,
                nom: doc.data().nom,
                visitas: doc.data().visitas,
            }));
            setUbicacions(data);
            setLoading(false);
        });

        return () => unsub();
    }, []);

    return (
        <UbicacionsContext.Provider value={{ ubicacions, loading }}>
            {children}
        </UbicacionsContext.Provider>
    );
};
