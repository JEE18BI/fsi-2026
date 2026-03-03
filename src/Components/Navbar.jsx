import { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";
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


                <div className="logo">
                    Fletcher Sharpe Invitational

                </div>

                <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <Link to="/">Home</Link>
                    {/*<Link to="/history">History</Link>*/}
                    <Link to="/officials">Officials</Link>
                    <Link to="/schedule">Program</Link>
                    <Link to="/players">Players</Link>
                    <Link to="/results">Blocks</Link>
                    <Link to="/thanks">Thanks</Link>

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