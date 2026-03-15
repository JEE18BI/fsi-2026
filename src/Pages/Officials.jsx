import "./Officials.css";

function Officials() {
    return (
        <section className="officials">
            <div className="officials-container">

                <h1 className="officials-title">Tournament Officials</h1>

                {/* ================= MANAGERS ================= */}
                <h2 className="role-heading">Tournament Managers</h2>
                <div className="platinum-sponsor">
                    <div className="person-card">
                        <img src="/derek.jpeg" alt="Derek Bull" />
                        <h3>Derek Bull</h3>
                        <p>Wednesday – Friday</p>
                    </div>

                    <div className="official-card">
                        <img src="/peter.png" alt="Peter Landrebe" />
                        <h3>Peter Landrebe</h3>
                        <p>Saturday – Sunday</p>
                    </div>
                </div>

                {/* ================= COMMITTEE ================= */}
                <h2 className="role-heading">Tournament Committee</h2>
                <div className="officials-grid">
                    <div className="official-card">
                        <img src="/georgina.png" alt="Georgina Carnegie" />
                        <h3>Georgina Carnegie</h3>
                        <p>Chair</p>
                    </div>

                    <div className="official-card"><img src="/Greg.JPG" alt="Greg Fletcher" /><h3>Greg Fletcher</h3></div>
                    <div className="official-card"><img src="/Alison.jpg" alt="Alison Sharpe" /><h3>Alison Sharpe</h3></div>
                    <div className="official-card"><img src="/stephen.jpg" alt="Stephen Burns" /><h3>Stephen Burns</h3></div>
                    <div className="official-card"><img src="/jill.jpg" alt="Jill Sullivan" /><h3>Jill Sullivan</h3></div>
                    <div className="official-card"><img src="/ianf.jpg" alt="Ian Foster" /><h3>Ian Foster</h3></div>
                    <div className="official-card"><img src="/pauline.png" alt="Pauline Markwell" /><h3>Pauline Markwell</h3></div>
                </div>

                {/* ================= REFEREE ================= */}
                <h2 className="role-heading">Tournament Referee</h2>
                <div className="platinum-sponsor">
                    <div className="person-card">
                        <img src="/lynda.png" alt="Lynda Toms" />
                        <h3>Lynda Toms</h3>
                    </div>
                </div>

                {/* ================= PLAYER LIAISON ================= */}
                <h2 className="role-heading">Player Liaison</h2>
                <div className="platinum-sponsor">
                    <div className="person-card">
                        <img src="/Greg.JPG" alt="Greg Fletcher" />
                        <h3>Greg Fletcher</h3>
                    </div>
                </div>



            </div>
        </section>
    );
}

export default Officials;