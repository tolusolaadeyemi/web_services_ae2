import { error } from "@sveltejs/kit";
import { getHouseDetail } from "$lib/db";

export async function load({ params }) {
  const house = await getHouseDetail(params.rowid);

  if (house) {
    return house;
  }

  error(404, "Not found");
}
