// import {getTrackedHomes} from "$lib/db/index.js";

export async function load({ params }) {
  // Fetch data from the API
  const token = "bmMzMjM2cGd0QHN0dWRlbnRzLm51bG9uZG9uLmFjLnVrOmM2ODU0NThhM2EyZGY2ZDI4YzRlNmQwN2FjY2U0NDRkNDViZGU1Mjk="; // Please input the in the project specified token in here
  const response = await fetch('https://epc.opendatacommunities.org/api/v1/domestic/search?&size=100', {
    headers: {
      'Authorization': `Basic ${token}`,
      'Accept': 'application/json'
    }
  });
  const data = await response.json();
  return { data: data["rows"] };
}
//   getTrackedHomes() must be implemented for the link and fetch the data from the link in the db

// const trackedHomes = getTrackedHomes();
// console.log(trackedHomes);