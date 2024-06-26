import UpdatePassForm from "../components/UpdatePassForm";

export default function UpdatePassPage() {
  return (
    <div className="flex justify-center">
      <div className="max-w-xl w-full space-y-6">
        <h1 className="text-3xl tracking-tighter font-bold">Reset Password</h1>
        <UpdatePassForm />
      </div>
    </div>
  );
}
