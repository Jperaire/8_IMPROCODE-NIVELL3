import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firestore";

export const deleteEventById = async (id: string) => {
    const confirmDelete = confirm(`Do you want to delete the selected event?`);
    if (!confirmDelete) return;

    try {
        await deleteDoc(doc(db, "places", id));
        alert("Event deleted");
    } catch (error) {
        console.error("Error deleting:", error);
        alert("Error deleting event");
    }
};
