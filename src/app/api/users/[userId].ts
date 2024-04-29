import type { NextApiRequest, NextApiResponse } from "next";

interface UserUpdateRequest {
  email?: string;
  password?: string;
}

interface ApiResponse {
  message: string;
  user?: UserUpdateRequest;
  error?: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  const { userId } = req.query;
  if (req.method === "PUT") {
    const updates = req.body as UserUpdateRequest;
    // Logique pour mettre à jour les informations de l'utilisateur
    res.status(200).json({ message: "User info updated", user: updates });
  } else {
    res.setHeader("Allow", ["PUT"]);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
