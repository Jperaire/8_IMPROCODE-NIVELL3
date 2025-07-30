import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import { useContext } from "react";
import { EventsContext } from "../../../context/EventsContext";

import { deleteEvent } from "../../../utils/deleteEvent";

import "./calendar.css";
import styles from "./calendar.module.css";

export const Calendar = () => {
    const context = useContext(EventsContext);

    if (context?.loading) return <p>Loading calendar...</p>;

    const events = context?.events.map((u) => {
        return {
            id: u.id,
            title: u.name,
            date: u.visitDate,
        };
    });

    return (
        <section>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView={"dayGridMonth"}
                events={events}
                eventClick={deleteEvent}
                firstDay={1}
                fixedWeekCount={false}
                height={"auto"}
            />
            <p className={styles.deleteInfo}>
                Delete an event by clicking on it
            </p>
        </section>
    );
};
