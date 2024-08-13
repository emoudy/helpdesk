import AuthForm from '../AuthForm';

export default function Login() {
  return (
    <main className="mx-auto max-w-96">
      <h1 className="log-in-page text-center">HelpDesk</h1>
      <h2 className="log-in-page text-center">Log In</h2>
      <AuthForm />
    </main>
  );
}
