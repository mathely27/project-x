import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import MemoryTyping from "./Pages/MemoryTyping";
import ColorClash from "./Pages/ColorClash";
import F1Reaction from "./Pages/F1Reaction";
import CpsTest from "./Pages/CpsTest";
import Landing from "./Pages/Landing";

//matheelyyy
import Auth from "./Pages/Auth";
import Signup from "./Pages/Signup";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />

                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Auth />} />

                <Route path="/signup" element={<Signup />} />

                <Route path="/memory-typing" element={<MemoryTyping />} />
                <Route path="/color-clash" element={<ColorClash />} />

                <Route path="/reaction-time" element={<F1Reaction />} />
                <Route path="/f1-reaction" element={<F1Reaction />} />

                <Route path="/cps-king" element={<CpsTest />} />
                <Route path="/cps-test" element={<CpsTest />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;