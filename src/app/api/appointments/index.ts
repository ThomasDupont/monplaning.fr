import type { NextApiRequest, NextApiResponse } from "next";

interface AppointmentRequest {
  userId: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  location: string;
}

interface ApiResponse {
  message: string;
  appointment?: AppointmentRequest;
  error?: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method === "POST") {
    const { userId, title, description, startTime, endTime, location } =
      req.body as AppointmentRequest;
    // Logique pour créer un rendez-vous
    res
      .status(201)
      .json({
        message: "Appointment created",
        appointment: {
          userId,
          title,
          description,
          startTime,
          endTime,
          location,
        },
      });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
