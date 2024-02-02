import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../redux/slices/authSlice";
import { authAPI } from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const dispatcher = useDispatch();

  const handleSubmitButton = async (e) => {
    e.preventDefault();
    const response = await authAPI.api_login({
      email: email,
      password: password,
    });

    if (!response) {
      setError("Some error occurred. Try again later");
      return;
    }

    if (response.error) {
      setError(response.error);
      return;
    }

    const userJSON = JSON.stringify(response);
    dispatcher(login(userJSON));
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
          <button
            onClick={handleSubmitButton}
            type="submit"
            className="submit-btn"
          >
            Submit
          </button>
          <p>
            New user? <Link to="/signup">Create an account</Link>
          </p>

          {error && <div className="error-message">{error}</div>}
        </form>
      </div>
    </div>
  );
}
