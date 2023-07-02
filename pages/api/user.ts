import { getAuth, clerkClient, Clerk } from "@clerk/nextjs/server";
import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { userId } = getAuth(req);

	if (!userId) {
		return res.status(401).json({ error: "Unauthorized" });
	}

	const user = userId ? await clerkClient.users.getUser(userId) : null;

	return res.status(200).json({ user });
}
