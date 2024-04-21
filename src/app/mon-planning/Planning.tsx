'use client';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import frLocale from '@fullcalendar/core/locales/fr';
import interactionPlugin from '@fullcalendar/interaction';
import type { EventInput } from '@fullcalendar/core/index.js';
import { usePlanning } from './planning.hook';

type Props = {
    events: EventInput[]
}
export default function Calendar(props: Props) {
  const { onEventChange, onClickOnEvent, handleDateClick } = usePlanning();

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="timeGridWeek" // paramettrable dans l'espace admin du client ?
      events={props.events}
      eventClick={onClickOnEvent}
      eventChange={onEventChange}
      slotLabelInterval="00:30" // paramettrable dans l'espace admin du client ?
      slotMinTime="07:00:00" // paramettrable dans l'espace admin du client ?
      slotMaxTime="21:00:00" // paramettrable dans l'espace admin du client ?
      dateClick={handleDateClick}
      locale={frLocale}
      headerToolbar={{
        left: 'prev,next,today',
        center: 'title',
        right: 'timeGridWeek,timeGridDay,dayGridMonth',
      }}
      slotLabelFormat={{
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }}
    />
  );
}
