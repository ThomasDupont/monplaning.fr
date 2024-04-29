import type { NextApiRequest, NextApiResponse } from "next";

interface SubscriptionRequest {
  userId: string;
  plan: string;
}

interface ApiResponse {
  message: string;
  subscription?: SubscriptionRequest;
  error?: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method === "POST") {
    const { userId, plan } = req.body as SubscriptionRequest;
    // Logique pour créer un abonnement
    res
      .status(201)
      .json({
        message: "Subscription created",
        subscription: { userId, plan },
      });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
