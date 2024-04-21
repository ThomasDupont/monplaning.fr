import type {
  EventChangeArg,
  EventClickArg,
} from '@fullcalendar/core/index.js';
import type { DateClickArg } from '@fullcalendar/interaction/index.js';

export const usePlanning = () => {
  const onEventChange = (info: EventChangeArg) => {
    console.log(info);
  };
  const onClickOnEvent = (info: EventClickArg) => {
    console.log(info);
    alert("une petite modale pour modifier l'événement");
  };

  const handleDateClick = (arg: DateClickArg) => {
    if (arg.view.calendar.view.type !== 'timeGridDay') {
      arg.view.calendar.changeView('timeGridDay', arg.dateStr);
    } else {
      alert('Une petite modale pour ajouter un nouvel événement');
    }
  };

  return {
    onEventChange,
    onClickOnEvent,
    handleDateClick,
  };
};
