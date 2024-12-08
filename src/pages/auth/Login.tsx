import { useState } from "react";
import { logIn } from "src/hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError(null); // Reset errors
      const userCredential = await logIn(email, password);
      setSuccess(`User registered successfully: ${userCredential.email}`);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="panel">
      <h1 className="text-3xl mb-7">Login</h1>
      <div className="flex items-end justify-between">
        <form
          className="grid gap-5 grid-cols-1 w-1/3"
          onSubmit={handleRegister}
        >
          <div className="flex flex-col">
            <label className="mb-2">Email</label>
            <input
              className="h-8"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2">Password</label>
            <input
              className="h-8"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        <button className="btn-green" type="submit">
          Login
        </button>
        </form>
      </div>

      {success && <p style={{ color: "green" }}>{success}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Login