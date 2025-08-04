// src/utils/mapUtils.ts
import mapboxgl from "mapbox-gl";
import { Events } from "../types/Events";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

export const initializeMap = (mapDiv: HTMLDivElement, events: Events[]) => {
    const map = new mapboxgl.Map({
        container: mapDiv,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [2.1734, 41.3851], // Barcelona
        zoom: 12,
    });

    events.forEach((event) => {
        const { lat, lng, name } = event;
        if (lat && lng) {
            new mapboxgl.Marker()
                .setLngLat([lng, lat])
                .setPopup(new mapboxgl.Popup().setText(name))
                .addTo(map);
        }
    });

    return map;
};
