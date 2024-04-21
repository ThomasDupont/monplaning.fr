import { fetchEventForOneUser } from '@/services/calendarEvents.service';
import Calendar from './Planning';
import './mon-planning.scss';
import type { Metadata } from 'next';
import { dbEventsToFullCalendarEvents } from '@/adapters/dbEventsToFullCalendarEvent.adapters';

export const metadata: Metadata = {
    title: 'Prise de rendez-vous en ligne',
    description: 'Simplifiez la gestion de votre planning avec notre outil de prise de rendez-vous en ligne.',
    robots: 'noindex, nofollow',
};

export default async function Page() {
    const events = await fetchEventForOneUser(1);

    const fullCalendarEvents = dbEventsToFullCalendarEvents(events);
    return (
        <div>
            <h1>Mon planning</h1>
            <p>Gestion de son planning (vision des rdv, modification, ajout</p>
            <Calendar events={fullCalendarEvents} />
        </div>
    );
}
