// pages/auth/signin.js
import { signIn, signOut, useSession } from 'next-auth/client';

export default function SignIn() {
  const [session, loading] = useSession();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {!session ? (
        <>
          <h2>Sign In</h2>
          <form onSubmit={async (e) => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
            const result = await signIn('credentials', { redirect: false, email, password });
            if (result.error) {
              console.error('Login failed:', result.error);
            }
          }}>
            <label>
              Email:
              <input type="text" name="email" required />
            </label>
            <label>
              Password:
              <input type="password" name="password" required />
            </label>
            <button type="submit">Sign In</button>
          </form>
        </>
      ) : (
        <>
          <p>Welcome, {session.user.name}!</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  );
}
