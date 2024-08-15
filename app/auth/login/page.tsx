import AuthForm from '../AuthForm';

export default function Login() {
  return (
    <main className="mx-auto max-w-96">
      <h1 className="log-in-page text-center mt-10">HelpDesk</h1>
      <h2 className="log-in-page text-center my-5">Log In</h2>
      <AuthForm />
    </main>
  );
}
