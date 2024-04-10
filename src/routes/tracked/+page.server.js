import { getUserLmk } from '$lib/db';

export async function load({ locals }) {
    return { user: locals?.id };
  }
  
  export async function load({ params, locals }) {
    // Extract the user ID from the locals object
    const userUsername = locals?.id;
    const lmkKeys = getUserLmk(userUsername);
    console.log(lmkKeys);
  
    const token = "bmMzMjM2cGd0QHN0dWRlbnRzLm51bG9uZG9uLmFjLnVrOmM2ODU0NThhM2EyZGY2ZDI4YzRlNmQwN2FjY2U0NDRkNDViZGU1Mjk=";
  
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
