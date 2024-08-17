import { login, signup } from './actions';

export default function AuthForm() {
  return (
    <form id="formElem">
      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" required aria-label="Form Email" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" required aria-label="Form Password" />
      </div>
      <div className="text-center">
        <button className="btn-primary mb-2" formAction={login}>
          Login
        </button>
        or
        <button className="btn-secondary mt-2" formAction={signup}>
          Sign Up
        </button>
      </div>
    </form>
  );
}
