import WelcomeCard from "../Components/WelcomeCard";
import StatsCard from "../Components/StatsCard";
import ActiveModules from "../Components/ActiveModules";
import MemoryTyping from "./MemoryTyping";
import {
  LayoutDashboard,
  Keyboard,
  Mouse,
  Timer,
  Trophy,
  Search,
  Moon,
  Settings,
  UserCircle,
  
} from 'lucide-react'
import {useState} from 'react'; 



function Dashboard(){
    const [activeMenu, setActiveMenu] = useState('dashboard')
    return (
        <>

        {activeMenu === "typing" ? (
            <MemoryTyping />
        ) : (
        <div className="dashboard">
            <aside className="sidebar">
                <div className="logo">
                    <h1>Clutch</h1>
                </div>
                

                <nav>
                    <p  className={activeMenu === 'dashboard' ? 'active' : ''}
                        onClick={() => setActiveMenu('dashboard')}>
                            <LayoutDashboard />DASHBOARD</p>
                    <p   className={activeMenu === 'typing' ? 'active' : ''}
                            onClick={() => setActiveMenu('typing')}><Keyboard />MEMORY TYPING</p>
                    <p   className={activeMenu === 'cps' ? 'active' : ''}
                            onClick={() => setActiveMenu('cps')}> <Mouse/>CPS KING</p>
                    <p   className={activeMenu === 'reaction' ? 'active' : ''}
                            onClick={() => setActiveMenu('reaction')}><Timer/>REACTION TIME</p>
                    <p   className={activeMenu === 'leaderboard' ? 'active' : ''}
                            onClick={() => setActiveMenu('leaderboard')}><Trophy/>LEADERBOARDS</p>


                </nav>
                <div className="sidebar-bottom">
  <button>GO_PRO</button>

  <p>? HELP</p>
  <p>↪ LOGOUT</p>
</div>

            </aside>
            
            <main className="main-content">
                <div className="top-bar">
                    <div className="search-box">
                        <Search/>
                        <input type="text" placeholder="FIND COMPETITIORS....." />

                    </div>
                    <div className="topbar-actions">
                        <button><Moon /></button>
                        <button><Settings /></button>
                        <button className="profile">
                        <UserCircle />
                        <span>PROGRAMER_99</span>
                        </button>
                    </div>


                </div>
                {activeMenu === "typing"?(
                    <MemoryTyping/>
                ):(
                    <>
                <div className="dashboard-cards">
                    <WelcomeCard />
                    <StatsCard/>
                </div>
                <ActiveModules setActiveMenu={setActiveMenu} />
                {/* <div className="stats-card">
                    <div calssName="stats-title">
                        <BarChart3/>
                        <h3>
                            YOUR_STATS
                        </h3>
                        <div className="stats-list">
                            <div className="stats-item">
                                <div className="stats-info">
                                    <span>PEAK SPEED</span>
                                    <strong>148 WPM</strong>
                                </div>
                                
                            </div>

                            <div className="stats-item">
                                <div className="stats-info">
                                    <span>CLICK POWER</span>
                                    <strong>14.2 CPS</strong>
                                </div>
                                
                            </div>

                            <div className="stats-item">
                                <div className="stats-info">
                                    <span>GLOBAL RANK</span>
                                    <strong>442nd</strong>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>     */}
                </>
                )}
      </main>
</div>
)}
</>
    )
}
export default Dashboard