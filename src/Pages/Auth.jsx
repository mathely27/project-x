import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  UserRound,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

import { useAuth } from "../Context/AuthContext";
import "./Auth.css";

export default function Auth() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [stageName, setStageName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    const enteredStageName = stageName.trim().toLowerCase();

    if (!enteredStageName || !password) {
      setError("Please enter your stage name and password.");
      return;
    }

    let accounts = [];

    try {
      accounts = JSON.parse(
        localStorage.getItem("clutchAccounts") || "[]"
      );

      if (!Array.isArray(accounts)) {
        setError("Saved account data is invalid.");
        return;
      }
    } catch {
      setError("Unable to read saved accounts. Please try again.");
      return;
    }

    const account = accounts.find(
      (item) =>
        item.stageName?.trim().toLowerCase() === enteredStageName &&
        item.password === password
    );

    if (!account) {
      setError("Incorrect stage name or password.");
      return;
    }

    login({
      stageName: account.stageName,
      email: account.email,
      favouriteGame: account.favouriteGame,
    });

    navigate("/dashboard", { replace: true });
  }

  return (
    <div className="auth-page">
      <main className="login-wrapper">
        <section className="auth-card">
          <form onSubmit={handleSubmit} noValidate>
            <label className="auth-input">
              <UserRound size={20} />
              <input
                type="text"
                placeholder="Stage Name"
                aria-label="Stage Name"
                autoComplete="username"
                value={stageName}
                onChange={(event) => {
                  setStageName(event.target.value);
                  setError("");
                }}
                required
              />
            </label>

            <label className="auth-input">
              <LockKeyhole size={20} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                aria-label="Password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setError("");
                }}
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword((previous) => !previous)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>
            </label>

            <div className="auth-options">
              <label className="remember-option">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                />
                <span>Remember me</span>
              </label>

              <button
                type="button"
                className="auth-link"
                onClick={() =>
                  setError("Password reset is not available yet.")
                }
              >
                Forgot password?
              </button>
            </div>

            {error && (
              <p
                className="auth-form-message auth-form-error"
                role="alert"
              >
                {error}
              </p>
            )}

            <button className="auth-primary" type="submit">
              Login
              <ArrowRight size={19} />
            </button>
          </form>

          <p className="auth-switch">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </p>
        </section>
      </main>
    </div>
  );
}