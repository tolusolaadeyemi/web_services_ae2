export async function GET({ url, cookies }) {
    console.log(cookies.get('Token'))
    //verify token and return error if token is wrong
    let term = url.searchParams.get('q') || "";

    const token =
    "dHMzMjIwcGd0QHN0dWRlbnRzLm51bG9uZG9uLmFjLnVrOjU0NzYzZGYwNTk4YmY1YWU4MGM4ZDMxN2QwZGMxNWI5NGQ2YmFhZmM=";

    const headers = {
        headers: {
            Accept: "application/json",
            Authorization: `Basic ${token}`,
        },
    };

    const response = await fetch(`https://epc.opendatacommunities.org/api/v1/domestic/search?postcode=${term}&size=100&from=100`, headers);
    const results = await response.json();

    const rows = results?.rows || [];
    const _homes = rows.map((r) => {
        const lmk_key = r['lmk-key'];
        if (lmk_key) {
            return {
                lmk : r['lmk-key'],
                constituency: r?.constituency,
                address1: r?.address1,
                postcode: r?.postcode
            };
        }
    });
    return new Response(JSON.stringify(_homes));
}