export interface Events {
    id: string;
    category: string;
    lat: number;
    lng: number;
    name: string;
    visitDate: string;
}

export interface EventsContextProps {
    events: Events[];
    loading: boolean;
}
