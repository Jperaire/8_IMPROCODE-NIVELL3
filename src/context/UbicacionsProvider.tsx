// src/context/UbicacionsProvider.tsx
import React, { useState, useEffect } from "react";
import { UbicacionsContext } from "./UbicacionsContext";
import { Ubicacions } from "../types/Ubicacions";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firestore";

export const UbicacionsProvider: React.FC = ({ children }) => {
    const [ubicacions, setUbicacions] = useState<Ubicacions[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

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
            setUbicacions(data);
            setLoading(false);
        };

        fetchUbicacions();
    }, []);

    return (
        <UbicacionsContext.Provider value={{ ubicacions, loading: false }}>
            {children}
        </UbicacionsContext.Provider>
    );
};
