'use client';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import frLocale from '@fullcalendar/core/locales/fr';
import interactionPlugin from '@fullcalendar/interaction';
import type { DayCellContentArg, DayHeaderContentArg, EventContentArg, EventInput } from '@fullcalendar/core/index.js';
import { usePlanning } from './planning.hook';
import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';


function RenderEventContent(eventInfo: EventContentArg) {
    return (
        <>
            <span>{eventInfo.event.title}</span>
        </>
    );
}

function RenderDayHeaderContent(content: DayHeaderContentArg) {
    //console.info(content)
    return (
        <>
            <span>{content.text}</span>
        </>
    )
}

function RenderDayCellContent(content: DayCellContentArg) {
    //console.info(content)
    return (
        <>
            <span></span>
        </>
    )
}

function ChangeDateComponent({ setCurrentDate, view }: { setCurrentDate: Dispatch<SetStateAction<Date>>, view: VIEWS }) {

    const handleChangeDate = (i: 1 | -1) => {
        switch (view) {
            case VIEWS.WEEK:
                setCurrentDate((prev) => new Date(prev.setDate(prev.getDate() + 7 * i)));
                break;
            case VIEWS.DAY:
                setCurrentDate((prev) => new Date(prev.setDate(prev.getDate() + i)));
                break;
            case VIEWS.MONTH:
                setCurrentDate((prev) => new Date(prev.setMonth(prev.getMonth() + i)));
                break;
        }
    }
    return (<>
        <button onClick={() => handleChangeDate(-1)}>PREV</button>
        <button onClick={() => handleChangeDate(1)}>NEXT</button>
    </>)
}

enum VIEWS {
    WEEK = 'timeGridWeek',
    DAY = 'timeGridDay',
    MONTH = 'dayGridMonth'
}
type Props = {
    events: EventInput[]
}
export default function Calendar(props: Props) {
    const { onEventChange, onClickOnEvent, handleDateClick } = usePlanning();
    const [currentDate, setCurrentDate] = useState(new Date());

    console.info(currentDate)

    return (<>
        <ChangeDateComponent setCurrentDate={setCurrentDate} view={VIEWS.WEEK} />
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            navLinks={false}
            initialView={VIEWS.WEEK} // paramettrable dans l'espace admin du client ?
            initialDate={currentDate}
            events={props.events}
            eventClick={onClickOnEvent}
            eventChange={onEventChange}
            eventContent={RenderEventContent}
            dayHeaderContent={RenderDayHeaderContent}
            dayCellContent={RenderDayCellContent}
            allDaySlot={false}
            slotEventOverlap={false}
            slotLabelInterval="00:30" // paramettrable dans l'espace admin du client ?
            slotMinTime="07:00:00" // paramettrable dans l'espace admin du client ?
            slotMaxTime="21:00:00" // paramettrable dans l'espace admin du client ?
            dateClick={handleDateClick}
            locale={frLocale}
            /*
            headerToolbar={{
                left: 'prev,next,today',
                center: 'title',
                right: 'timeGridWeek,timeGridDay,dayGridMonth',
            }}
            */
            slotLabelFormat={{
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            }}
        />
    </>
    );
}
