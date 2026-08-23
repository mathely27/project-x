import { Keyboard, Mouse, Timer } from "lucide-react";
function ActiveModules(){
    return(
        <>
            <div className="active-modules">
                <h2>ACTIVE_MODULES</h2>

               <div className="module-list">

    <div className="module-card">
        <Keyboard />
        <h3>TYPING TEST</h3>
        <p>Test your typing speed and accuracy.</p>
        <button>LAUNCH</button>
    </div>
    <div className="module-card">
        <Mouse />
        <h3>CPS KING</h3>
        <p>Test how fast you can click.</p>
        <button>LAUNCH</button>
    </div>
    <div className="module-card">
        <Keyboard />
        <h3>COLOUR CLASH</h3>
        <p>Challenge your memory and focus.</p>
        <button>LAUNCH</button>
    </div>


    <div className="module-card">
        <Timer />
        <h3>NUMBER RUSH</h3>
        <p>Test how quickly you can react.</p>
        <button>LAUNCH</button>
    </div>

    <div className="module-card">
        <Keyboard />
        <h3>FLASH RECALL</h3>
        <p>Challenge your speed with words.</p>
        <button>LAUNCH</button>
    </div>

    <div className="module-card">
        <Mouse />
        <h3>DONT'T CLICK</h3>
        <p>Improve your clicking precision.</p>
        <button>LAUNCH</button>
    </div>

    <div className="module-card">
        <Timer />
        <h3>QUICK DRAW</h3>
        <p>Push your reflexes to the limit.</p>
        <button>LAUNCH</button>
    </div>

    {/* <div className="module-card">
        <Keyboard />
        <h3>MEMORY TEST</h3>
        <p>Challenge your memory and focus.</p>
        <button>LAUNCH</button>
    </div> */}

    <div className="module-card">
        <Mouse />
        <h3>REFLEX SWITCH</h3>
        <p>Test your accuracy and control.</p>
        <button>LAUNCH</button>
    </div>

</div>
</div>
        </>
    )
}
export default ActiveModules