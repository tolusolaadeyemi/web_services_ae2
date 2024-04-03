import { json } from "@sveltejs/kit";
import { getToots, createToot } from "$lib/db";

export function GET({ url }) {
  const toots = getToots();
  return json(toots);
}

export async function POST({ request }) {
  console.log("POST Recieved");
  const data = await request.json();
  console.log(data);
  if (data?.user && data?.text) {
    const row = createToot(data.user, data.text);
    return json({ id: row }, { status: 201 });
  }
}
