import { login, signup } from "./actions";

export default function AuthForm() {
  return (
    <form id="formElem">
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" name="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" type="password" name="password" required />
      <button className="btn-primary" formAction={login}>
        Log in
      </button>
      <button className="btn-secondary" formAction={signup}>
        If you do not have an account, sign up!
      </button>
    </form>
  );
}
