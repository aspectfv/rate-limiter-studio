import { redirect, type ActionFunctionArgs } from "react-router-dom";

export const loginAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  if (email === "demo@ratelimiter.studio" && password === "demo") {
    return redirect('/menu');
  }

  return "Invalid email or password. Please try again or sign up.";
};

export const registerAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");
  const agree = formData.get("agree");

  if (!fullName || !email || !password || !confirmPassword) {
    return "Please fill out all required fields.";
  }

  if (password !== confirmPassword) {
    return "Passwords do not match.";
  }

  if (!agree) {
    return "You must agree to the Terms and Conditions and Privacy Policy.";
  }

  console.log("Registration successful:", { fullName, email });
  return null;
};
