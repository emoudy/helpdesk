import AuthForm from '@/(auth)/AuthForm';
import MainHeader from '@/(dashboard)/components/header/MainHeader';

export default function Login() {
  return (
    <main className="col-span-2 max-w-96 mx-auto m-10">
      <MainHeader />
      <AuthForm />
    </main>
  );
}
