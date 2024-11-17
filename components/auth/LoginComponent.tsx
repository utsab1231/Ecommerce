import { auth } from "@/server/auth";
import CardForm from "./CardForm";
import { redirect } from "next/navigation";
import Form from "./SignInForm";

async function LoginForm() {
  const session = await auth();
  if (session) {
    redirect("/"); // Redirect to home page if user is already logged in
  }
  return (
    <div className="">
      <CardForm
        cardTitle="Welcome back!"
        socialButtons
        backButtonHref="/auth/register"
        backButtonLabel="Create a new account"
      >
        <Form />
      </CardForm>
    </div>
  );
}

export default LoginForm;
