import AuthForm from '../AuthForm';

export default function Login() {
  return (
    <main className="max-w-96 mx-auto">
      <h1 className="log-in-page text-center">HelpDesk</h1>
      <h2 className="log-in-page text-center">Log In</h2>
      <AuthForm />
    </main>
  );
}
