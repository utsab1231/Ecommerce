import { auth } from "@/server/auth";
import CardForm from "./CardForm";
import { redirect } from "next/navigation";
import Form from "@/components/auth/RegisterForm";
async function SignUpComponent() {
  const session = await auth();
  if (session) {
    redirect("/"); // Redirect to home page if user is already logged in
  }
  return (
    <div className="">
      <CardForm
        cardTitle="Create a new account"
        socialButtons
        backButtonHref="/auth/login"
        backButtonLabel="Already have an account?"
      >
        <Form />
      </CardForm>
    </div>
  );
}

export default SignUpComponent;
