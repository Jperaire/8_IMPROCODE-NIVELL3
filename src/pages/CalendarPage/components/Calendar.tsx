import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useContext } from "react";
import { UbicacionsContext } from "../../../context/UbicacionsContext";
import { deleteEvent } from "../../../utils/deleteEvent";
import "./calendar.css";

export const Calendar = () => {
    const context = useContext(UbicacionsContext);

    if (context?.loading) return <p>Cargando calendario...</p>;

    const eventos = context?.ubicacions.map((u) => {
        console.log(u);
        return {
            id: u.id,
            title: u.nom,
            date: u.visitas,
        };
    });

    return (
        <>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView={"dayGridMonth"}
                events={eventos}
                eventClick={deleteEvent}
                firstDay={1}
                fixedWeekCount={false}
                height={"auto"}
            />
        </>
    );
};
