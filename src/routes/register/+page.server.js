import { redirect, fail } from "@sveltejs/kit";
import jwt from "jsonwebtoken";
import { createUser } from "$lib/db";

export const load = async ({ locals }) => {
  // Check for user inside locals
  const user = locals?.id;

  // Send user to homepage if already logged in
  if (user) throw redirect(302, "/");

  return { user };
};

export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();

    const username = data.get("username");
    const password = data.get("password");

    try {
      // Check that we have username and password from form
      if (!username || !password)
        throw new Error("Enter username and password");

      // Create user in database
      let user = await createUser(username, password);

      // Create Token
      const token = jwt.sign({ id: username }, "JWT_SECRET_TOKEN", {
        expiresIn: "1d",
      });

      // Set Cookie
      cookies.set("Token", `Bearer ${token}`, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 60 * 60 * 24,
        path: "/",
      });
    } catch (err) {
      return fail(422, {
        error: err.message,
      });
    }

    // Send user to home after authorisation
    throw redirect(302, "/");
  },
};
