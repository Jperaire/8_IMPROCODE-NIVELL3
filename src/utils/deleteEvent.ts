import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firestore";
import { EventClickArg } from "@fullcalendar/core";

export const deleteEvent = async (clickInfo: EventClickArg) => {
    const confirmDelete = confirm(
        `¿Do you want to delete the event "${clickInfo.event.title}"?`
    );
    if (!confirmDelete) return;

    try {
        await deleteDoc(doc(db, "places", clickInfo.event.id));
        alert("Event deleted");
    } catch (error) {
        console.error("Error deleting:", error);
        alert("Error deleting event");
    }
};
