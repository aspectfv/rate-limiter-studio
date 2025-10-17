import type { ActionFunctionArgs } from "react-router-dom";

export const loginAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  if (email === "demo@ratelimiter.studio" && password === "demo") {
    return null;
  }

  return "Invalid email or password. Please try again or sign up.";
};
