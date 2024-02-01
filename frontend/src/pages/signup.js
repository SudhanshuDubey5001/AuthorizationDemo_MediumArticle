import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const handleSubmitButton = (e) => {
    e.preventDefault()

  }

  return (
    <div>
      <div className="card">
        <h2>Create Account</h2>
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
          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              name="password"
              onChange={(e) => setRetypePassword(e.target.value)}
              value={retypePassword}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
          <p>
            Already an account? <Link to="/=">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
