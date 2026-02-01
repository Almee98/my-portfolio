import { fetchOpenSourceContributions } from "../../../data/open-source";

export async function GET(request) {
  const url = new URL(request.url);
  const daysParam = Number(url.searchParams.get("days"));
  const days = Number.isFinite(daysParam) && daysParam > 0 ? daysParam : 90;
  const data = await fetchOpenSourceContributions({ days });
  return Response.json({ ...data, windowDays: days });
}
