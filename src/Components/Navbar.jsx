import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="nav-container">
                <div className="logo">FSI 2026</div>

                <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <a href="#">Home</a>
                    <a href="#">Program</a>
                    <a href="#">Players</a>
                    <a href="#">Results</a>
                    <a href="#">History</a>
                    <a href="#">Sponsors</a>
                </div>

                <div
                    className={`hamburger ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;