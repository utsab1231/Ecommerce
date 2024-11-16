import { auth } from "@/server/auth";
import CardForm from "./CardForm";
async function LoginForm() {
  const session = await auth();
  return (
    <div>
      <CardForm cardTitle="Login Form" socialButtons>
        <div>Something</div>
      </CardForm>
    </div>
  );
}

export default LoginForm;
