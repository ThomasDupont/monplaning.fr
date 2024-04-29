export const dynamic = "force-dynamic";

interface Appointment {
  appointmentId: string;
  userId: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  location: string;
}

type Params = {
  id: string;
};

export async function GET(request: Request, context: { params: Params }) {
  const { id } = context.params;
  const appointments: Appointment[] = [
    {
      appointmentId: "1",
      userId: id,
      title: "Meeting",
      description: "Project discussion",
      startTime: "14:00",
      endTime: "15:00",
      location: "Office",
    },
  ];
  return Response.json({ message: "List of appointments", appointments });
}
