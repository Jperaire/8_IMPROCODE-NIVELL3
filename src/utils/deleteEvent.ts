import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firestore";
import { EventClickArg } from "@fullcalendar/core";

export const deleteEvent = async (clickInfo: EventClickArg) => {
    const confirmDelete = confirm(
        `¿Eliminar evento "${clickInfo.event.title}"?`
    );
    if (!confirmDelete) return;

    try {
        await deleteDoc(doc(db, "lugares", clickInfo.event.id));
        alert("Evento eliminado");
    } catch (error) {
        console.error("Error al eliminar:", error);
        alert("Error al eliminar evento");
    }
};
