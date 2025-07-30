import { createContext } from "react";
import { EventsContextProps } from "../types/Events";

export const EventsContext = createContext<EventsContextProps | undefined>(
    undefined
);
