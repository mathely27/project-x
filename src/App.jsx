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

function App() {

    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Dashboard />}
                />

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