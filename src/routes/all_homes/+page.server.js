import 'dotenv/config'
import { redirect } from "@sveltejs/kit";
import { getAllLmk } from '$lib/db';
  
  export async function load({ params }) {
  //call this function to display username and stage along with homes
 
    // Extract the user ID from the locals object
    const lmkKeys = getAllLmk(); 
    const token = process.env.EPC_TOKEN;
  
    // Array to store fetched data for each lmk_key
    const data = [];
  
    // Iterate over each lmk_key and fetch data
    for (const lmk of lmkKeys) {
      const response = await fetch(`https://epc.opendatacommunities.org/api/v1/domestic/certificate/${lmk}`, {
        headers: {
          'Authorization': `Basic ${token}`,
          'Accept': 'application/json'
        }
      });
  
      if (response.ok) {
        const rows = await response.json();
        data.push(rows?.rows);
      } else {
        data.push(null);
      }
    }
  
    return { data };
  }

  export const actions = {
   logout: async ({ cookies, locals }) => {
    cookies.set("Token", "Bearer ", { path: "/", maxAge: 0 });
    throw redirect(302, "/");
  },
};
