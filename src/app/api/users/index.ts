import type { NextApiRequest, NextApiResponse } from "next";

interface User {
  userId: string;
  email: string;
  name: string;
}

interface ApiResponse {
  message: string;
  users?: User[];
  error?: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method === "GET") {
    // Simuler la récupération d'une liste d'utilisateurs
    const users: User[] = [
      { userId: "1", email: "user1@example.com", name: "John Doe" },
      { userId: "2", email: "user2@example.com", name: "Jane Smith" },
    ];
    res.status(200).json({ message: "List of all users", users });
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
