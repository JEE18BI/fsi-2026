import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import HomePage from "./Pages/Home";
import Program from "./Pages/Program";
import Sponsors from "./Pages/Sponsors.jsx"
import Officials from "./Pages/Officials.jsx"
import Players from "./Pages/Players.jsx"
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/schedule" element={<Program />} />
                <Route path="/thanks" element ={<Sponsors />} />
                <Route path="/officials" element ={<Officials />} />
<Route path="/players" element={<Players/>}></Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;