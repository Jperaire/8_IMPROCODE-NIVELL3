import { useContext, useRef, useEffect } from "react";
import { EventsContext } from "../../context/EventsContext";
import mapboxgl from "mapbox-gl";

import styles from "./MapPage.module.css";
import { initializeMap } from "../../utils/initializeMap";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

export const MapPage = () => {
    const context = useContext(EventsContext);
    const mapDiv = useRef<HTMLDivElement>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);

    useEffect(() => {
        if (mapDiv.current && context?.events) {
            mapRef.current = initializeMap(mapDiv.current, context.events);
        }

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, [context?.events]);

    if (!context || context.loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h2>MAP</h2>
            <div ref={mapDiv} className={styles.mapContainer}></div>
        </>
    );
};
