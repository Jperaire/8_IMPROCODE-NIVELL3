import { useContext, useState } from "react";
import { EventsContext } from "../../../../context/EventsContext";
import { deleteEventById } from "../../../../utils/deleteEventById";

import styles from "./DeleteEvent.module.css";

export const DeleteEvent = () => {
    const context = useContext(EventsContext);
    const [selectedId, setSelectedId] = useState("");

    if (context?.loading) return <p>Loading calendar...</p>;

    const events =
        context?.events.map((u) => ({
            id: u.id,
            title: u.name,
        })) || [];

    const handleDelete = async () => {
        if (!selectedId) return;
        await deleteEventById(selectedId);
        console.log("Deleted event with ID:", selectedId);
        setSelectedId("");
    };

    return (
        <>
            <div className={styles.container}>
                <h3>DELETE EVENT</h3>
                <select
                    className={styles.select}
                    value={selectedId}
                    onChange={(e) => setSelectedId(e.target.value)}
                >
                    <option value="">-- Select an event --</option>
                    {events.map((event) => (
                        <option key={event.id} value={event.id}>
                            {event.title}
                        </option>
                    ))}
                </select>

                <button
                    className={styles.button}
                    onClick={handleDelete}
                    disabled={!selectedId}
                >
                    Delete
                </button>
            </div>
        </>
    );
};
