import AuthForm from '@/(auth)/AuthForm';
import MainHeader from '@/(dashboard)/components/header/MainHeader';

export default function Login() {
  return (
    <div className="max-w-md mx-auto m-10">
      <AuthForm />
    </div>
  );
}
