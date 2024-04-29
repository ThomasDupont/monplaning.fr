import type { NextApiRequest, NextApiResponse } from "next";

interface UserRequest {
  email: string;
  password: string;
}

interface ApiResponse {
  message: string;
  user?: UserRequest;
  error?: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method === "POST") {
    const { email, password } = req.body as UserRequest;
    // Ajoutez ici votre logique pour enregistrer l'utilisateur, par exemple en utilisant une base de données.
    if (!email || !password) {
      res
        .status(400)
        .json({
          message: "Invalid request",
          error: "Email and password are required",
        });
      return;
    }
    // Simuler une réponse de succès
    res
      .status(201)
      .json({ message: "User registered", user: { email, password } });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
