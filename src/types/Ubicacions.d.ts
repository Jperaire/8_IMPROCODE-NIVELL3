export interface Ubicacions {
    id: string;
    categoria: string;
    lat: number;
    lng: number;
    nom: string;
    visitas?: string;
}

export interface UbicacionsContextProps {
    ubicacions: Ubicacions[];
    loading: boolean;
}
