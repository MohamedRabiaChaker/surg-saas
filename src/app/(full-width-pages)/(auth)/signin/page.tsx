import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signin - surgsass",
  description: "Signin page for surgsass",
};

export default function SignIn() {
  return <SignInForm />;
}
