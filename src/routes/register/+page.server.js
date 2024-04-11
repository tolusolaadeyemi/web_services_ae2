import 'dotenv/config'
import { redirect, fail } from "@sveltejs/kit";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { createUser } from "$lib/db";

export const load = async ({ locals }) => {
  // Check for user inside locals
  const user = locals?.id;

  // Send user to homepage if already logged in
  if (user) throw redirect(302, "/");

  return { user };
};

// Zod schema
const UserRegistration = z.object({
  username: z
    .string()
    .trim()
    .min(4, { message: "Username must be more than 4 characters long" })
    .max(10, { message: "Username must be less than 10 characters long" })
    .regex(new RegExp(/^[a-zA-Z0-9_]*$/), {
      message: "Only letters, numbers and underscores allowed in username",
    }),
  password: z
    .string()
    .min(5, { message: "Password must contain at least 5 characters" }),
});

export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const form = Object.fromEntries(data.entries());

    try {
      // Base check for required values
      if (!form?.username || !form.password)
        throw new Error("Enter username and password");

      // Validate data schema using zod
      const parsed = UserRegistration.safeParse(form);
      if (!parsed.success) {
        const errors = parsed.error.errors.map((error) => {
          return error.message;
        });

        throw new Error(errors.join(", "));
      }

      // Create user in database
      let user = await createUser(form.username, form.password);

      // Create Token     
      const token = jwt.sign({ id: form.username }, process.env.JWT_TOKEN, {
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
