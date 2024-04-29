import type { NextApiRequest, NextApiResponse } from "next";

interface AppointmentUpdateRequest {
  title?: string;
  description?: string;
  startTime?: string;
  endTime?: string;
  location?: string;
}

interface ApiResponse {
  message: string;
  appointmentId: string;
  appointment?: AppointmentUpdateRequest;
  error?: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  const { appointmentId } = req.query as { appointmentId: string };
  if (req.method === "GET") {
    // Logique pour récupérer un rendez-vous spécifique
    res.status(200).json({
      appointmentId,
      message: "Appointment details",
      appointment: {
        title: "Consultation",
        description: "Annual check-up",
        startTime: "10:00",
        endTime: "11:00",
        location: "Clinic",
      },
    });
  } else if (req.method === "PUT") {
    const updates = req.body as AppointmentUpdateRequest;
    // Logique pour mettre à jour un rendez-vous
    res
      .status(200)
      .json({
        message: "Appointment updated",
        appointment: updates,
        appointmentId,
      });
  } else if (req.method === "DELETE") {
    // Logique pour supprimer un rendez-vous
    res.status(200).json({ message: "Appointment deleted", appointmentId });
  } else {
    res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
    res
      .status(405)
      .json({ message: `Method ${req.method} Not Allowed`, appointmentId });
  }
}
