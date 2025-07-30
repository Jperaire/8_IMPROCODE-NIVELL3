// src/context/UbicacionsProvider.tsx
import React, { useState, useEffect } from "react";
import { EventsContext } from "./EventsContext";
import { Events } from "../types/Events";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firestore.ts";

interface MyComponentProps {
    children: React.ReactNode;
}

export const EventsProvider: React.FC<MyComponentProps> = ({ children }) => {
    const [events, setEvents] = useState<Events[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, "places"), (snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                category: doc.data().category,
                lat: doc.data().lat,
                lng: doc.data().lng,
                name: doc.data().name,
                visitDate: doc.data().visitDate,
            }));
            console.log(data);
            setEvents(data);
            setLoading(false);
        });

        return () => unsub();
    }, []);

    return (
        <EventsContext.Provider value={{ events, loading }}>
            {children}
        </EventsContext.Provider>
    );
};
