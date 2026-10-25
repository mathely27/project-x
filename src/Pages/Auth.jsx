import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  House,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

import { useAuth } from "../Context/AuthContext";
import "./Auth.css";

export default function Auth() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    let accounts = [];

    try {
      accounts = JSON.parse(
        localStorage.getItem("clutchAccounts") || "[]"
      );
    } catch {
      setError("Unable to read saved accounts.");
      return;
    }

    const account = accounts.find(
      (user) =>
        user.email?.toLowerCase() === email.trim().toLowerCase() &&
        user.password === password
    );

    if (!account) {
      setError("Incorrect email or password. Please try again.");
      return;
    }

    login({
      stageName: account.stageName,
      email: account.email,
      favouriteGame: account.favouriteGame,
    });

    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <button
        className="auth-home"
        type="button"
        onClick={() => navigate("/")}
      >
        <House size={18} />
        <span>Back to Home</span>
      </button>

      <main className="login-wrapper">
        <div className="auth-brand">
          <h1>CLUTCH</h1>
          <p>PLAY. IMPROVE. CHALLENGE.</p>
        </div>

        <section className="auth-card">
          <div className="auth-heading">
            <h2>
              Welcome <span>Back</span>
            </h2>
            <p>Login to continue your gaming journey</p>
          </div>

          <form onSubmit={handleLogin}>
            {/* Email */}
            <label className="auth-input">
              <Mail size={20} />
              <input
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            {/* Password */}
            <label className="auth-input">
              <LockKeyhole size={20} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                aria-label="Password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>
            </label>

            {/* Remember Me and Forgot Password */}
            <div className="auth-options">
              <label className="remember-option">
                <input type="checkbox" defaultChecked />
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

            {/* Error Message */}
            {error && (
              <p
                className="auth-form-message auth-form-error"
                role="alert"
              >
                {error}
              </p>
            )}

            {/* Login Button */}
            <button className="auth-primary" type="submit">
              Login
              <ArrowRight size={19} />
            </button>
          </form>

          <div className="auth-divider">
            <span />
            <p>OR</p>
            <span />
          </div>

          {/* Google Login - UI Only */}
          <button className="auth-social" type="button">
            <span className="google-icon">G</span>
            Continue with Google
          </button>

          {/* Signup Navigation */}
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

        <p className="auth-footer">
          YOUR NEXT HIGH SCORE STARTS HERE.
        </p>
      </main>
    </div>
  );
}