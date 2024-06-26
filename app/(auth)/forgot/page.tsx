import Link from "next/link";
import ForgotPassForm from "../components/ForgotPassForm";

export default function ForgotPassPage() {
  return (
    <div className="flex justify-center">
      <div className="max-w-xl w-full space-y-6">
        <h1 className="text-3xl tracking-tighter font-bold">Forgot Password</h1>
        <ForgotPassForm />
        <Link href="/login">
          <span className="text-primary flex items-center justify-center mt-4 underline underline-offset-4">
            Back to login
          </span>
        </Link>
      </div>
    </div>
  );
}
