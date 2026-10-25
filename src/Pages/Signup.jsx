import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  UserRound,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
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

    if (!stageName || !password || !confirmPassword) {
      setError("Please fill in all required fields.");
      return;
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
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
      storedAccounts = JSON.parse(
        localStorage.getItem("clutchAccounts") || "[]"
      );

      if (!Array.isArray(storedAccounts)) {
        setError("Saved account data is invalid. Please try again.");
        return;
      }
    } catch {
      setError("Could not read saved accounts. Please try again.");
      return;
    }

    if (
      email &&
      storedAccounts.some(
        (account) => account.email?.trim().toLowerCase() === email
      )
    ) {
      setError("An account with this email already exists. Please log in.");
      return;
    }

    if (
      storedAccounts.some(
        (account) =>
          account.stageName?.trim().toLowerCase() ===
          stageName.toLowerCase()
      )
    ) {
      setError("This stage name is already taken. Please choose another.");
      return;
    }

    const newAccount = {
      stageName,
      email,
      password,
    };

    try {
      localStorage.setItem(
        "clutchAccounts",
        JSON.stringify([...storedAccounts, newAccount])
      );
    } catch {
      setError("Could not save your account. Please try again.");
      return;
    }

    signup({
      stageName: newAccount.stageName,
      email: newAccount.email,
    });

    navigate("/dashboard", { replace: true });
  }

  return (
    <div className="auth-page">
      <main className="login-wrapper">
        <section className="auth-card signup-card">
          <form onSubmit={handleSubmit} noValidate>
            <label className="auth-input">
              <UserRound size={20} />
              <input
                type="text"
                name="stageName"
                placeholder="Stage Name"
                aria-label="Stage Name"
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
                placeholder="Email address (Optional)"
                aria-label="Email address (Optional)"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
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
              Sign Up
              <ArrowRight size={19} />
            </button>
          </form>

          <p className="auth-switch">
            Already have an account?{" "}
            <button type="button" onClick={() => navigate("/login")}>
              Login
            </button>
          </p>
        </section>
      </main>
    </div>
  );
}