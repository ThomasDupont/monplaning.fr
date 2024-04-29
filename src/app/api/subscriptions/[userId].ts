import type { NextApiRequest, NextApiResponse } from "next";

interface SubscriptionUpdate {
  plan?: string;
}

interface ApiResponse {
  message: string;
  subscription?: SubscriptionUpdate;
  error?: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  const { userId } = req.query;
  if (req.method === "GET") {
    // Logique pour récupérer un abonnement
    res
      .status(200)
      .json({
        message: "Subscription details",
        subscription: { plan: "Premium" },
      });
  } else if (req.method === "PUT") {
    const { plan } = req.body as SubscriptionUpdate;
    // Logique pour mettre à jour un abonnement
    res
      .status(200)
      .json({ message: "Subscription updated", subscription: { plan } });
  } else if (req.method === "DELETE") {
    // Logique pour supprimer un abonnement
    res.status(200).json({ message: "Subscription deleted" });
  } else {
    res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
