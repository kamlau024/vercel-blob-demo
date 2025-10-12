import { list } from "@vercel/blob";

export async function GET() {
  const { blobs } = await list({ limit: 100 });
  return Response.json({ blobs });
}