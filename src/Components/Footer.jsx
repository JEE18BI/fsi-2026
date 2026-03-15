import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">

            {/* TOP ROW: Brand, Links, Contact */}
            <div className="footer-main">
                <div className="footer-brand">
                    <h3>Fletcher Sharpe Invitational</h3>
                    <p>Sydney, Australia</p>
                </div>

                <div className="footer-nav">
                    <a href="/">Home</a>
                    <a href="/players">Players</a>
                    <a href="/schedule">Program</a>
                    <a href="/officials">Officials</a>
                </div>

                <div className="footer-contact">
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