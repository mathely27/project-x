
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  House,
  UserRound,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  Gamepad2,
} from "lucide-react";

import { useAuth } from "../Context/AuthContext";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    stageName: "",
    email: "",
    password: "",
    confirmPassword: "",
    favouriteGame: "",
    terms: false,
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value, checked, type } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    const stageName = formData.stageName.trim();
    const email = formData.email.trim().toLowerCase();
    const password = formData.password;
    const confirmPassword = formData.confirmPassword;

    if (!stageName || !email || !password || !confirmPassword) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!formData.terms) {
      setError("Please accept the Terms and Privacy Policy.");
      return;
    }

    let storedAccounts = [];

    try {
      const savedAccounts = localStorage.getItem("clutchAccounts");
      storedAccounts = savedAccounts ? JSON.parse(savedAccounts) : [];

      if (!Array.isArray(storedAccounts)) {
        setError("Saved account data is invalid. Please contact support.");
        return;
      }
    } catch {
      setError("Could not read saved accounts. Please try again.");
      return;
    }

    const emailExists = storedAccounts.some(
      (account) =>
        account.email?.trim().toLowerCase() === email
    );

    if (emailExists) {
      setError("An account with this email already exists. Please log in.");
      return;
    }

    const newAccount = {
      stageName,
      email,
      password,
      favouriteGame: formData.favouriteGame,
    };

    const updatedAccounts = [...storedAccounts, newAccount];

    try {
      localStorage.setItem(
        "clutchAccounts",
        JSON.stringify(updatedAccounts)
      );
    } catch {
      setError("Could not save your account. Please try again.");
      return;
    }

    signup({
      stageName: newAccount.stageName,
      email: newAccount.email,
      favouriteGame: newAccount.favouriteGame,
    });

    navigate("/dashboard", { replace: true });
  }

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

        <section className="auth-card signup-card">
          <div className="auth-heading">
            <h2>
              Join the <span>Game</span>
            </h2>
            <p>Create your account and start your journey</p>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <label className="auth-input">
              <UserRound size={20} />
              <input
                type="text"
                name="stageName"
                placeholder="Stagename"
                aria-label="Stagename"
                autoComplete="nickname"
                value={formData.stageName}
                onChange={handleChange}
                required
              />
            </label>

            <label className="auth-input">
              <Mail size={20} />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                aria-label="Email address"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label className="auth-input">
              <LockKeyhole size={20} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password (minimum 8 characters)"
                aria-label="Password"
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword((previous) => !previous)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </label>

            <label className="auth-input">
              <LockKeyhole size={20} />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm password"
                aria-label="Confirm password"
                autoComplete="new-password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowConfirmPassword((previous) => !previous)
                }
                aria-label="Toggle confirm password visibility"
              >
                {showConfirmPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>
            </label>

            <label className="auth-input">
              <Gamepad2 size={20} />
              <select
                className="signup-select"
                name="favouriteGame"
                value={formData.favouriteGame}
                onChange={handleChange}
                aria-label="Favourite game (optional)"
              >
                <option value="">Favourite game (Optional)</option>
                <option value="memory-typing">Memory Typing</option>
                <option value="color-clash">Color Clash</option>
                <option value="cps-test">CPS Test</option>
                <option value="reaction-time">Reaction Time</option>
                <option value="number-rush">Number Rush</option>
              </select>
            </label>

            <label className="terms-option">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                required
              />
              <span>
                I agree to the <a href="#terms">Terms of Service</a> and{" "}
                <a href="#privacy">Privacy Policy</a>.
              </span>
            </label>

            {error && (
              <p className="auth-form-message auth-form-error" role="alert">
                {error}
              </p>
            )}

            <button className="auth-primary" type="submit">
              Create Account
              <ArrowRight size={19} />
            </button>
          </form>

          <div className="auth-divider">
            <span />
            <p>OR</p>
            <span />
          </div>

          <button className="auth-social" type="button">
            <span className="google-icon">G</span>
            Continue with Google
          </button>

          <button
            className="auth-social signup-github"
            type="button"
          >
            <span className="github-icon">⌘</span>
            Continue with GitHub
          </button>

          <p className="auth-switch">
            Already have an account?{" "}
            <button type="button" onClick={() => navigate("/login")}>
              Login
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

