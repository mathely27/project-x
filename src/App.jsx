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

            </Routes>

        </BrowserRouter>
    );
}

export default App;