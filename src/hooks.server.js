import 'dotenv/config'
import jwt from "jsonwebtoken";
import { getUser } from "$lib/db";

export async function handle({ event, resolve }) {
  const token = event.cookies.get("Token");

  if (token) {
    try {
      // Verify JWT
      const jwtUser = jwt.verify(token, process.env.JWT_TOKEN);
      // Check that the user exists on db
      if (!getUser(jwtUser?.id)) {
        throw new Error("User not found");
      }

      // Put user in event.locals that we can load on each page.server
      event.locals.id = jwtUser?.id;
    } catch (error) {
      console.log("JWT Error:", error);
      event.cookies.set("Token", "", { path: "/", maxAge: 0 });
      delete event.locals.id;
    }
  }

  const response = await resolve(event);
  return response;
}
