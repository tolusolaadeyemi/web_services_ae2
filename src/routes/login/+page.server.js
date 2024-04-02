import { redirect, fail } from "@sveltejs/kit";
import jwt from "jsonwebtoken";
import { getUser } from "$lib/db";

export const load = async ({ locals }) => {
  const user = locals.id;

  // Send user to homepage if logged in
  if (user) throw redirect(302, "/");

  return { user };
};

export const actions = {
  default: async ({ cookies, request }) => {
    const form = Object.fromEntries(await request.formData());

    try {
      // Check that we have a username and password from form
      if (!form?.username || !form?.password)
        throw new Error("Enter username and password");

      // Get user details from database
      const user = await getUser(form.username);

      // Check password and generate JWT if they match
      if (user && user.password == form.password) {
        // Create Token
        const token = jwt.sign({ id: user.username }, "JWT_SECRET_TOKEN", {
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
      } else {
        throw new Error("Incorrect username or password");
      }
    } catch (err) {
      return fail(422, {
        error: err.message,
      });
    }

    // Send user to home after authorisation
    throw redirect(302, "/");
  },
};
