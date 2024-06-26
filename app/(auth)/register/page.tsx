import { OAuthButtons } from "../actions/oauth-signin";
import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="flex justify-center">
      <div className="max-w-xl w-full space-y-6">
        <h1 className="text-3xl tracking-tighter font-bold">Register</h1>
        <RegisterForm />
        <OAuthButtons />
      </div>
    </div>
  );
}
