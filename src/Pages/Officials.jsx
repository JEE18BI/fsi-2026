import "./Officials.css";

function Officials() {
    return (
        <section className="officials">
            <div className="officials-container">

                <h1 className="officials-title">Tournament Officials</h1>

                {/* ================= MANAGERS ================= */}
                <h2 className="role-heading">Tournament Managers</h2>
                <div className="officials-grid">
                    <div className="official-card">
                        <img src="/derek.jpg" alt="Derek Bull" />
                        <h3>Derek Bull</h3>
                        <p>Wednesday – Friday</p>
                    </div>

                    <div className="official-card">
                        <img src="/peter.jpg" alt="Peter Landrebe" />
                        <h3>Peter Landrebe</h3>
                        <p>Saturday – Sunday</p>
                    </div>
                </div>

                {/* ================= COMMITTEE ================= */}
                <h2 className="role-heading">Tournament Committee</h2>
                <div className="officials-grid">
                    <div className="official-card">
                        <img src="/georgina.jpg" alt="Georgina Carnegie" />
                        <h3>Georgina Carnegie</h3>
                        <p>Chair</p>
                    </div>

                    <div className="official-card"><img src="/greg.jpg" alt="Greg Fletcher" /><h3>Greg Fletcher</h3></div>
                    <div className="official-card"><img src="/alison.jpg" alt="Alison Sharpe" /><h3>Alison Sharpe</h3></div>
                    <div className="official-card"><img src="/stephen.jpg" alt="Stephen Burns" /><h3>Stephen Burns</h3></div>
                    <div className="official-card"><img src="/jill.jpg" alt="Jill Sullivan" /><h3>Jill Sullivan</h3></div>
                    <div className="official-card"><img src="/ianf.jpg" alt="Ian Foster" /><h3>Ian Foster</h3></div>
                    <div className="official-card"><img src="/pauline.jpg" alt="Pauline Markwell" /><h3>Pauline Markwell</h3></div>
                </div>

                {/* ================= REFEREE ================= */}
                <h2 className="role-heading">Tournament Referee</h2>
                <div className="officials-grid">
                    <div className="official-card">
                        <img src="/lynda.jpg" alt="Lynda Toms" />
                        <h3>Lynda Toms</h3>
                    </div>
                </div>

                {/* ================= PLAYER LIAISON ================= */}
                <h2 className="role-heading">Player Liaison</h2>
                <div className="officials-grid">
                    <div className="official-card">
                        <img src="/greg.jpg" alt="Greg Fletcher" />
                        <h3>Greg Fletcher</h3>
                    </div>
                </div>

                {/* ================= GROUND TEAM ================= */}
                <h2 className="role-heading">Ground Team</h2>
                <div className="officials-grid">
                    <div className="official-card">
                        <img src="/paul.jpg" alt="Paul Skorvac" />
                        <h3>Paul Skorvac</h3>
                    </div>

                    <div className="official-card">
                        <img src="/bruce.jpg" alt="Bruce Fry" />
                        <h3>Bruce Fry</h3>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Officials;