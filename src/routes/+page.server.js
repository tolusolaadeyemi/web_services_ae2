import { redirect } from "@sveltejs/kit";
import { getUserHomes, trackHome } from "$lib/db";

export async function load({ params, locals }) {
  const users_homes = getUserHomes();
  return { user: locals?.id, users_homes: users_homes };
}

export const actions = {
    create: async ({ request, locals }) => {
      const data = await request.formData();
      const lmk_key = data.get("lmk_key");
      const state = data.get("state");
      const epc_band = data.get("epc_band");
      const potential_improvement = data.get("potential_improvement");
      const stage = data.get("stage");

      //track the home if we have a key
      if (locals?.id && lmk_key) {
        trackHome(lmk_key, state, epc_band, potential_improvement, stage, locals.id);
      }
    },
  logout: async ({ cookies, locals }) => {
    cookies.set("Token", "Bearer ", { path: "/", maxAge: 0 });
    throw redirect(302, "/");
  },
};
