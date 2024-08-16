import AuthForm from '@/(auth)/AuthForm';

export default function Login() {
  return (
    <main className="mx-auto max-w-96 mt-10">
      <h1 className="log-in-page text-center">HelpDesk</h1>
      <h2 className="log-in-page text-center my-5">Login</h2>
      <AuthForm />
    </main>
  );
}
