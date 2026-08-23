import { BarChart3 } from 'lucide-react';
function StatsCard(){
    return(
        <>
         <div className="stats-card">
                    <div className="stats-title">
                        <BarChart3/>
                        <h3>
                            YOUR_STATS
                        </h3>
                    </div>    
                        <div className="stats-list">
                            <div className="stats-item">
                                <div className="stats-info">
                                    <span>PEAK SPEED</span>
                                    <strong style={{color: "#ff8c00"}}>148 WPM</strong>
                                </div>
                                
                            </div>

                            <div className="stats-item">
                                <div className="stats-info">
                                    <span>CLICK POWER</span>
                                    <strong style={{color: "#f8441c"}}>14.2 CPS</strong>
                                </div>
                                
                            </div>

                            <div className="stats-item">
                                <div className="stats-info">
                                    <span>GLOBAL RANK</span>
                                    <strong style={{color: "#ffb5a0"}}>442nd</strong>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                 
        </>
    )
}
export default StatsCard