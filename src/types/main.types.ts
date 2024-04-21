export type Service = {
  id: number;
  name: string;
  price: number;
};

export type HairCutSpaceData = {
  id: number;
  name: string;
  ville: string;
  address: string;
  phone: string;
  services: Service[];
};

export type CalendarEvent = {
  id: number;
  title: string;
  startTime: Date;
  endTime: Date;
  serviceId: number;
  customerId: number;
  customer: {
    name: string;
    phone: string;
  };
};
