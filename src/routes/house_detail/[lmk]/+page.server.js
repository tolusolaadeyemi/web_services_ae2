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

//   user loaded the page
//  get the epcid is the lmk_key in the datafrom the url
// check whether it exists in the db
// if it exists, get the notes and the comments
//  fetch the epcid from the epc api x
//  send back combined json
