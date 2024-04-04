import { getTrackedHomes } from "$lib/db";
export async function load({ params, locals }) {
    const homes = getTrackedHomes();
    return { user: locals?.id, homes: homes };
  }
