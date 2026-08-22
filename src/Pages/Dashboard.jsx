import {
  LayoutDashboard,
  Keyboard,
  Mouse,
  Timer,
  Trophy
} from 'lucide-react'
import {useState} from 'react'; 
function Dashboard(){
    const [activeMenu, setActiveMenu] = useState('dashboard')
    return (
        <>
        <div className="dashboard">
            <aside className="sidebar">
                <div className="logo">
                    <h1>Reflex</h1>
                </div>
                

                <nav>
                    <p  className={activeMenu === 'dashboard' ? 'active' : ''}
                        onClick={() => setActiveMenu('dashboard')}>
                            <LayoutDashboard />DASHBOARD</p>
                    <p   className={activeMenu === 'typing' ? 'active' : ''}
  onClick={() => setActiveMenu('typing')}><Keyboard />TYPING TEST</p>
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
                <h1>WELCOME BACK</h1>
                </main>
        </div>
        </>
    )
}
export default Dashboard