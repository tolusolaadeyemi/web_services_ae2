import { handleLoginRedirect } from "$lib/utils"
import { redirect } from "@sveltejs/kit"

export const load = async (event) => {
  if (!event.locals.id) {
    //redirect to the login page if not logged in
    throw redirect(302, handleLoginRedirect(event));
  } else {
    //load the search page component if logged in
    return { user: event.locals.id };
  }
};

export const actions = {
  logout: async ({ cookies, locals }) => {
   cookies.set("Token", "Bearer ", { path: "/", maxAge: 0 });
   throw redirect(302, "/");
 },
};
