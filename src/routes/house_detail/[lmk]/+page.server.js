import { trackHome, createNotes } from "$lib/db";
export async function load({ params }) {
  // Fetch data from the API
  const token = "bmMzMjM2cGd0QHN0dWRlbnRzLm51bG9uZG9uLmFjLnVrOmM2ODU0NThhM2EyZGY2ZDI4YzRlNmQwN2FjY2U0NDRkNDViZGU1Mjk="; // Please input the provided specified token here
  const response = await fetch('https://epc.opendatacommunities.org/api/v1/domestic/certificate/' + params.lmk, {
    headers: {
      'Authorization': `Basic ${token}`,
      'Accept': 'application/json'
    }
  });


  if (response.ok) {
    const rows = await response.json()
    return { data: rows?.rows };
  }
  else {
    return { data: null }
  }

}

export const actions = {
    create: async ({ request, locals }) => {
      const data = await request.formData();
      const lmk_key = data.get("lmk_key");
      const stage = data.get("stage");

      //track the home if we have a key
      if (locals?.id && lmk_key) {
        trackHome(lmk_key, stage, locals.id);
      }
    },
    create_note: async ({ request, locals }) => {
      const data = await request.formData();
      console.log('form', data)
      const lmk_key = data.get("lmk_key");
      const notes = data.get("notes");

      //track the home if we have a key
      if (locals?.id && lmk_key) {
        createNotes(lmk_key, notes, locals.id);
      }
    },
  logout: async ({ cookies, locals }) => {
    cookies.set("Token", "Bearer ", { path: "/", maxAge: 0 });
    throw redirect(302, "/");
  },
};
