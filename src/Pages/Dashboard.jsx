
import WelcomeCard from "../Components/WelcomeCard";
import StatsCard from "../Components/StatsCard";
import ActiveModules from "../Components/ActiveModules";
import MemoryTyping from "./MemoryTyping";
import ColorClash from "./ColorClash";
import F1Reaction from "./F1Reaction";
import CpsTest from "./CpsTest";

import {
  LayoutDashboard,
  Keyboard,
  Mouse,
  Timer,
  Trophy,
  Search,
  Moon,
  Sun,
  Settings,
  UserCircle,
} from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function Dashboard() {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [isDark, setIsDark] = useState(true);

  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const toggleTheme = () => {
    const root = document.documentElement;
    const current = root.getAttribute("data-theme");
    root.setAttribute("data-theme", current === "light" ? "dark" : "light");
    setIsDark((prev) => !prev);
  };

  const openGame = (game) => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    setActiveMenu(game);
  };

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <>
      {activeMenu === "typing" ? (
        <MemoryTyping onBack={() => setActiveMenu("dashboard")} />
      ) : activeMenu === "colorClash" ? (
        <ColorClash onBack={() => setActiveMenu("dashboard")} />
      ) : activeMenu === "reaction" ? (
        <F1Reaction onBack={() => setActiveMenu("dashboard")} />
      ) : activeMenu === "cpsKing" ? (
        <CpsTest onBack={() => setActiveMenu("dashboard")} />
      ) : (
        <div className="dashboard">
          <aside className="sidebar">
            <div className="logo">
              <h1>Clutch</h1>
            </div>

            <nav>
              <p
                className={activeMenu === "dashboard" ? "active" : ""}
                onClick={() => setActiveMenu("dashboard")}
              >
                <LayoutDashboard />
                DASHBOARD
              </p>

              <p
                className={activeMenu === "typing" ? "active" : ""}
                onClick={() => openGame("typing")}
              >
                <Keyboard />
                MEMORY TYPING
              </p>

              <p
                className={activeMenu === "colorClash" ? "active" : ""}
                onClick={() => openGame("colorClash")}
              >
                <Mouse />
                COLOR CLASH
              </p>

              <p
                className={activeMenu === "reaction" ? "active" : ""}
                onClick={() => openGame("reaction")}
              >
                <Timer />
                REACTION TIME
              </p>

              <p
                className={activeMenu === "leaderboard" ? "active" : ""}
                onClick={() => setActiveMenu("leaderboard")}
              >
                <Trophy />
                LEADERBOARDS
              </p>
            </nav>

            <div className="sidebar-bottom">
              <button type="button">GO_PRO</button>
              <p>? HELP</p>

              <p
                onClick={handleLogout}
                style={{ cursor: "pointer" }}
              >
                ↪ LOGOUT
              </p>
            </div>
          </aside>

          <main className="main-content">
            <div className="top-bar">
              <div className="search-box">
                <Search />
                <input
                  type="text"
                  placeholder="FIND COMPETITORS....."
                />
              </div>

              <div className="topbar-actions">
                <button type="button" onClick={toggleTheme}>
                  {isDark ? <Moon /> : <Sun />}
                </button>

                <button type="button">
                  <Settings />
                </button>

                <button
                  className="profile"
                  type="button"
                  onClick={() => {
                    if (!isAuthenticated) {
                      navigate("/login");
                    }
                  }}
                >
                  <UserCircle />
                  <span>
                    {isAuthenticated
                      ? user?.stageName || "PLAYER"
                      : "LOGIN / SIGN UP"}
                  </span>
                </button>
              </div>
            </div>

            <div className="dashboard-cards">
              <WelcomeCard />
              <StatsCard />
            </div>

            <ActiveModules setActiveMenu={openGame} />
          </main>
        </div>
      )}
    </>
  );
}

export default Dashboard;

