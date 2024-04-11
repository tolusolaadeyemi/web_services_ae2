import 'dotenv/config'
export async function GET({ url}) {
    let filter = url.searchParams.get('f') || "";
    let term = url.searchParams.get('q') || "";

    const token = process.env.EPC_TOKEN;

    const headers = {
        headers: {
            Accept: "application/json",
            Authorization: `Basic ${token}`,
        },
    };

    const response = await fetch(`https://epc.opendatacommunities.org/api/v1/domestic/search?${filter}=${term}&size=100&from=100`, headers);
    const results = await response.json();

    const rows = results?.rows || [];
    const _homes = rows.map((r) => {
        const lmk_key = r['lmk-key'];
        if (lmk_key) {
            return {
                lmk : r['lmk-key'],
                constituency: r?.constituency,
                address1: r?.address1,
                postcode: r?.postcode,
                energyBand: r["current-energy-rating"],
                propertyType: r["property-type"]
            };
        }
    });
    return new Response(JSON.stringify(_homes));
}