import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import HomePage from "./Pages/Home";
import Program from "./Pages/Program";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/program" element={<Program />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;