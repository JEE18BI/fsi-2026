import "./Sponsors.css";

function Sponsors() {
    return (
        <section className="sponsors">

            <h1 className="sponsors-title">Sponsors & Thanks</h1>

            {/* ================= SPONSORS ================= */}

            <h2 className="section-title">Platinum Sponsor</h2>
            <div className="platinum-sponsor">
                <div className="person-card">
                    <img src="/Alison.jpg" alt="Alison Sharpe" />
                    <h3>Alison Sharpe</h3>
                </div>
            </div>

            <h2 className="section-title">Gold Sponsors</h2>
            <div className="platinum-sponsor">
                <div className="person-card">
                    <img src="/georgina.png" alt="Georgina Carnegie" />
                    <h3>Georgina Carnegie</h3>
                </div>

            </div>

            <h2 className="section-title">Lawn Sponsors</h2>
            <div className="people-grid">
                <div className="person-card"><h3>Lawn 3 (Final)</h3></div>
                <div className="person-card"><h3>Lawn 2</h3></div>
                <div className="person-card"><h3>Lawn 1</h3></div>
            </div>

            <h2 className="section-title">Live Streaming</h2>


            <h2 className="section-title">Raffle Sponsors</h2>
            <div className="people-grid">
                <div className="person-card"><img src="/faros.jpg" alt="Hawke's Brewing" /><h3>Faros Seafood</h3></div>
                <div className="person-card"><img src="/hawkes.png" alt="Hawke's Brewing" /><h3>Hawke’s Brewing </h3></div>

            </div>



            {/* ================= OFFICIAL THANKS ================= */}

            <h2 className="thanks-title">Official Thanks</h2>

            <h3 className="role-title">Host Club</h3>
            <div className="platinum-sponsor">
                <div className="person-card">

                    <h3>Cooks River Croquet Club</h3>
                </div>
            </div>

            <h3 className="role-title">Tournament Managers</h3>
            <div className="platinum-sponsor">
                <div className="person-card"><img src="/derek.jpeg" alt="Peter Landrebe" /><h3>Derek Bull</h3></div>
                <div className="person-card"><img src="/peter.png" alt="Peter Landrebe" /><h3>Peter Landrebe</h3></div>
            </div>

            <h3 className="role-title">Tournament Referee</h3>
            <div className="platinum-sponsor">
                <div className="person-card"><img src="/lynda.png" alt="Peter Landrebe" /><h3>Lynda Toms</h3></div>

            </div>

            <h3 className="role-title">Videographers</h3>
            <div className="platinum-sponsor">
                <div className="person-card"><img src="/samuel.jpg" alt="Samuel Gumbrell" /><h3>Samuel Gumbrell</h3></div>
            </div>

            <h3 className="role-title">Commentators</h3>
            <div className="platinum-sponsor">
                <div className="person-card"><img src="/gareth.png" alt="Gareth Denyer" /><h3>Gareth Denyer</h3></div>
                <div className="person-card"><img src="/karen.jpg" alt="Karen Bisley" /><h3>Karen Bisley</h3></div>
            </div>

            <h3 className="role-title">Ground Team</h3>
            <div className="people-grid">
                <div className="person-card"><h3>Paul Skorvac</h3></div>
                <div className="person-card"><h3>Terry Abbott</h3></div>
                <div className="person-card"><h3>Ian Sinclair</h3></div>
            </div>

            <h3 className="role-title">Scorers & Runners</h3>
            <div className="people-grid">
                <div className="person-card"><h3>Stephen Burns</h3></div>
                <div className="person-card"><h3>Georgina Carnegie</h3></div>
                <div className="person-card"><h3>Patrick Rundle</h3></div>
                <div className="person-card"><h3>Pauline Markwell</h3></div>
            </div>

            <h3 className="role-title">Catering & Cake Team</h3>
            <div className="people-grid">
                <div className="person-card"><h3>Jill Sullivan</h3></div>
                <div className="person-card"><h3>Janet Robilliard</h3></div>
                <div className="person-card"><h3>Barbara Killen</h3></div>
                <div className="person-card"><h3>Carolyn Williams</h3></div>
            </div>

            <h3 className="role-title">Media</h3>
            <div className="people-grid">
                <div className="person-card"><h3>Pauline Markwell</h3></div>

            </div>

            <h3 className="role-title highlight-role">Website</h3>
            <div className="platinum-sponsor">
                <div className="person-card highlight-you">

                    <h3>Jana El Saeed</h3>
                </div>
            </div>



        </section>
    );
}

export default Sponsors;