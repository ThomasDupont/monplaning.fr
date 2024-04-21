import type { CalendarEvent } from '@/types/main.types';

export const fetchEventForOneUser_TEST = (
  id: number,
): Promise<CalendarEvent[]> => Promise.resolve([
  {
    id: 1,
    title: 'Coupe simple',
    startTime: new Date('2024-05-22T15:00:00'),
    endTime: new Date('2024-05-22T16:00:00'),
    serviceId: 1,
    customerId: 1,
    customer: { name: 'Kevin', phone: '0123456789' },
  },
  {
    id: 2,
    title: 'Couleur',
    startTime: new Date('2024-05-22T10:00:00'),
    endTime: new Date('2024-05-22T12:00:00'),
    serviceId: 2,
    customerId: 2,
    customer: { name: 'Thomas', phone: '0123456789' },
  },
  {
    id: 3,
    title: 'Coupe simple',
    startTime: new Date('2024-04-22T15:00:00'),
    endTime: new Date('2024-04-22T16:00:00'),
    serviceId: 1,
    customerId: 1,
    customer: { name: 'Kevin', phone: '0123456789' },
  },
  {
    id: 4,
    title: 'Couleur',
    startTime: new Date('2024-04-22T10:00:00'),
    endTime: new Date('2024-04-22T12:00:00'),
    serviceId: 2,
    customerId: 2,
    customer: { name: 'Thomas', phone: '0123456789' },
  },
]);
