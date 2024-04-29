import type { NextApiRequest, NextApiResponse } from "next";

interface LoginRequest {
  email: string;
  password: string;
}

interface ApiResponse {
  message: string;
  user?: LoginRequest;
  error?: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method === "POST") {
    const { email, password } = req.body as LoginRequest;
    // Logique pour authentifier un utilisateur
    res
      .status(200)
      .json({ message: "User logged in", user: { email, password } });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
