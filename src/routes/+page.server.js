import { redirect } from "@sveltejs/kit";
import { getUserHomes, trackHome } from "$lib/db";

export async function load({ params, locals }) {
  const users_homes = getUserHomes();
  return { user: locals?.id, users_homes: users_homes };
}

export const actions = {
//   create: async ({ request, locals }) => {
//     const data = await request.formData();
//     const text = data.get("text");

//     // Create the toot if we have text
//     if (locals?.id && text) {
//       createToot(locals.id, text);
//     }
//   },
  logout: async ({ cookies, locals }) => {
    cookies.set("Token", "Bearer ", { path: "/", maxAge: 0 });
    throw redirect(302, "/");
  },
};
