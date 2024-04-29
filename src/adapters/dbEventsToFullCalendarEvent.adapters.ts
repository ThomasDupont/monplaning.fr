import type { CalendarEvent } from "@/types/main.types";
import type { EventInput } from "@fullcalendar/core/index.js";

export const dbEventsToFullCalendarEvent = (
  dbEvent: CalendarEvent
): EventInput => ({
  id: dbEvent.id.toString(),
  title: `${dbEvent.title} - ${dbEvent.customer.name} - ${dbEvent.customer.phone}`,
  start: dbEvent.startTime,
  end: dbEvent.endTime,
  editable: true,
});

export const dbEventsToFullCalendarEvents = (
  dbEvents: CalendarEvent[]
): EventInput[] =>
  dbEvents.map((dbEvent) => dbEventsToFullCalendarEvent(dbEvent));
