// import Dashboard from './Pages/Dashboard'

// function App() {
//   return (
//     <Dashboard />
//   )
// }

// export default App




import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import MemoryTyping from "./Pages/MemoryTyping";
import ColorClash from "./Pages/ColorClash";
import Landing from "./Pages/Landing";
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

              
                <Route
                    path="/memory-typing"
                    element={<MemoryTyping />}
                />

              
                <Route
                    path="/color-clash"
                    element={<ColorClash />}
                />

            </Routes>
        </BrowserRouter>
    );
}

export default App;