import RegisterForm from "@/forms/RegisterForm";

export default function Register() {
  return (
    <main className="flex items-center justify-center flex-1 px-4 py-16">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <span className="text-5xl">🍕</span>
          <h1 className="mt-4 text-3xl font-bold text-stone-900">Create account</h1>
          <p className="mt-2 text-stone-500">Join Pizza House and start ordering</p>
        </div>
        <RegisterForm />
      </div>
    </main>
  );
}
