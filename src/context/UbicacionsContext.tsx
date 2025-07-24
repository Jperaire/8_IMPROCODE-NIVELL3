import { createContext } from "react";
import { UbicacionsContextProps } from "../types/Ubicacions";

export const UbicacionsContext = createContext<
    UbicacionsContextProps | undefined
>(undefined);
