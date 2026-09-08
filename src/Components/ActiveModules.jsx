// import { Keyboard, Mouse, Timer } from "lucide-react";
// function ActiveModules({onLaunchTyping}){
//     return(
//         <>
//             <div className="active-modules">
//                 <h2>ACTIVE_MODULES</h2>

//                <div className="module-list">

//     <div className="module-card">
//         <Keyboard />
//         <h3>TYPING TEST</h3>
//         <p>Test your typing speed and accuracy.</p>
//         <button onClick={onLaunchTyping}>
//     LAUNCH
// </button>
        
//     </div>
//     <div className="module-card">
//         <Mouse />
//         <h3>CPS KING</h3>
//         <p>Test how fast you can click.</p>
//         <button>LAUNCH</button>
//     </div>
//     <div className="module-card">
//         <Keyboard />
//         <h3>COLOUR CLASH</h3>
//         <p>Challenge your memory and focus.</p>
//         <button>LAUNCH</button>
//     </div>


//     <div className="module-card">
//         <Timer />
//         <h3>NUMBER RUSH</h3>
//         <p>Test how quickly you can react.</p>
//         <button>LAUNCH</button>
//     </div>

//     <div className="module-card">
//         <Keyboard />
//         <h3>FLASH RECALL</h3>
//         <p>Challenge your speed with words.</p>
//         <button>LAUNCH</button>
//     </div>

//     <div className="module-card">
//         <Mouse />
//         <h3>DONT'T CLICK</h3>
//         <p>Improve your clicking precision.</p>
//         <button>LAUNCH</button>
//     </div>

//     <div className="module-card">
//         <Timer />
//         <h3>QUICK DRAW</h3>
//         <p>Push your reflexes to the limit.</p>
//         <button>LAUNCH</button>
//     </div>

//     {/* <div className="module-card">
//         <Keyboard />
//         <h3>MEMORY TEST</h3>
//         <p>Challenge your memory and focus.</p>
//         <button>LAUNCH</button>
//     </div> */}

//     <div className="module-card">
//         <Mouse />
//         <h3>REFLEX SWITCH</h3>
//         <p>Test your accuracy and control.</p>
//         <button>LAUNCH</button>
//     </div>

// </div>
// </div>
//         </>
//     )
// }
// export default ActiveModules




import { Keyboard, Mouse, Timer } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ActiveModules() {
    const navigate = useNavigate();

    return (
        <>
            <div className="active-modules">
                <h2>ACTIVE_MODULES</h2>
                <div className="module-list">
                    <div className="module-card">
                        <Keyboard />
                        <h3>MEMORY TYPING</h3>
                        <p>
                            Test your typing speed and accuracy.
                        </p>
                        <button
                            onClick={() => navigate("/memory-typing")}
                        >
                            LAUNCH
                        </button>
                    </div>

                    <div className="module-card">
                        <Mouse />
                        <h3>CPS KING</h3>
                        <p>
                            Test how fast you can click.
                        </p>
                        <button>
                            LAUNCH
                        </button>
                    </div>

                    <div className="module-card">
                        <Keyboard />
                        <h3>COLOUR CLASH</h3>
                        <p>
                            Challenge your memory and focus.
                        </p>
                        <button onClick={() => window.location.href = "/color-clash"}>
                            LAUNCH
                        </button>
                    </div>

                    <div className="module-card">
                        <Timer />
                        <h3>NUMBER RUSH</h3>
                        <p>
                            Test how quickly you can react.
                        </p>
                        <button>
                            LAUNCH
                        </button>
                    </div>

                    <div className="module-card">
                        <Keyboard />
                        <h3>FLASH RECALL</h3>
                        <p>
                            Challenge your speed with words.
                        </p>
                        <button>
                            LAUNCH
                        </button>
                    </div>

                    <div className="module-card">
                        <Mouse />
                        <h3>DON'T CLICK</h3>
                        <p>
                            Improve your clicking precision.
                        </p>
                        <button>
                            LAUNCH
                        </button>
                    </div>

                    <div className="module-card">
                        <Timer />
                        <h3>QUICK DRAW</h3>
                        <p>
                            Push your reflexes to the limit.
                        </p>
                        <button>
                            LAUNCH
                        </button>
                    </div>

                    <div className="module-card">
                        <Mouse />
                        <h3>REFLEX SWITCH</h3>
                        <p>
                            Test your accuracy and control.
                        </p>
                        <button>
                            LAUNCH
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ActiveModules;

