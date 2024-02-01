import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitButton = (e) => {
    e.preventDefault();

  };

  return (
    <div>
      <div className="card">
        <h2>Login</h2>
        <form method="post">
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
          <p>
            New user? <Link to="/signup">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
