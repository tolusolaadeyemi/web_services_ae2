import jwt from "jsonwebtoken";

export async function handle({ event, resolve }) {
  const authCookie = event.cookies.get("Token");

  if (authCookie) {
    const token = authCookie.split(" ")[1];

    try {
      // Verify JWT
      const jwtUser = jwt.verify(token, "JWT_SECRET_TOKEN");

      // Check that the user exists on db
      if (!getUser(jwtUser?.id)) {
        throw new Error("User not found");
      }

      // Put user in event.locals that we can load on each page.server
      event.locals.id = jwtUser?.id;
    } catch (error) {
      console.log("JWT Error:", error);
      event.cookies.set("Token", "Bearer ", { path: "/", maxAge: 0 });
      delete event.locals.id;
    }
  }

  const response = await resolve(event);
  return response;
}
