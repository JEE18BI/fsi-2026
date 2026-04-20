import "./Footer.css";
import { Link } from "react-router-dom"; // Add this line!

function Footer() {
    return (
        <footer className="footer">

            {/* TOP ROW: Brand, Links, Contact */}
            <div className="footer-main">
                <div className="footer-brand">
                    <h3>Fletcher Sharpe Invitational</h3>
                    <p>Sydney, Australia </p>
                </div>

                <div className="footer-nav">
                    {/* Use Link and 'to' instead of 'a' and 'href' */}
                    <Link to="/">Home</Link>
                    <Link to="/players">Players</Link>
                    <Link to="/schedule">Program</Link>
                    <Link to="/officials">Officials</Link>
                    <Link to="/blocks">Blocks</Link>
                </div>

                <div className="footer-contact">
                    {/* Email links stay as normal 'a' tags */}
                    <a href="mailto:admin@ucaevents.org">
                        admin@ucaevents.org
                    </a>
                </div>
            </div>

            {/* BOTTOM ROW: Copyright and Developer */}
            <div className="footer-bottom">
                <p className="ft-left">
                    © 2026 Fletcher Sharpe Invitational
                </p>
                <p className="ft-right">
                    Website by{" "}
                    {/* External links stay as normal 'a' tags */}
                    <a
                        href="mailto:janaelsaeed20@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Jana Mohamed
                    </a>
                </p>
            </div>

        </footer>
    );
}

export default Footer;