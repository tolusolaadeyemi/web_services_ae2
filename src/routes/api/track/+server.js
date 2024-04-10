import { json } from "@sveltejs/kit";
import { getTrackedHomes, trackHome } from "$lib/db";

export function GET({ url }) {
  const tracked_homes = getTrackedHomes();
  return json(tracked_homes);
}

export async function POST({ request }) {
    const data = await request.json();
    if (data?.lmk_key && data?.state && data?.epc_band && data?.potential_improvement && data?.stage && data?.user_username) {
      const row = trackHome(data.lmk_key, data.state, data.epc_band, data.potential_improvement, data.stage, data.user_username);
      return json({ id: row }, { status: 201 });
    }
  }