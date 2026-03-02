import "./Home.css";

function Home() {
    return (
        <div className="home">
            <section className="hero-clean">
                <img src="/Sydney.png" alt="Sydney" className="hero-bg" />

                <div className="hero-content">
                    <h1>Fletcher Sharpe Invitational </h1>
                     <h2>Under 35s Golf Croquet Tournament </h2>
                </div>
            </section>
            {/* EVENT DETAILS */}
            <section className="details">
                <div className="details-container">
                    <div className="detail-box">
                        <h3>Date</h3>
                        <p>22 – 26 April 2026</p>
                    </div>

                    <div className="detail-box">
                        <h3>Location</h3>
                        <p>
                            Cooks River Croquet Club<br />
                            Marrickville, Sydney
                        </p>
                    </div>

                    <div className="detail-box">
                        <h3>Contact</h3>
                        <p>
                            Greg Fletcher<br />
                            gr3gfletcher@gmail.com
                        </p>
                    </div>
                </div>
            </section>
            <section className="History">
                <div className="history">
                    <h2>
                        How did it start?
                    </h2>
                    <p>
                        The Fletcher Sharpe Invitational was first played in 2024 as the brainchild of Georgina Carnegie, then President of Cooks River Croquet Club.
                        <span className="highlight-name"> Robert Fletcher</span> and
                        <span className="highlight-name"> Alison Sharpe</span>, top Australian international golf (and association) croquet players, enthusiastically put their support and energy behind the initiative to bring the tournament to life.
                    </p>
                </div>
            </section>
            <section className="Previous-winners">

                    <h2 className="winners-title">Past Winners</h2>

                    <div className="winners-grid">
                        <div
                            className="winner-card"
                            style={{ backgroundImage: "url(/robert.jpeg)" }}
                        >
                            <div className="winner-overlay">
                                <span className="winner-category">2025 Championship</span>
                                <h3 className="winner-name">Malcolm Fletcher</h3>
                            </div>
                        </div>

                        <div
                            className="winner-card"
                            style={{ backgroundImage: "url(/robert.jpeg)" }}
                        >
                            <div className="winner-overlay">
                                <span className="winner-category">2024 Championship</span>
                                <h3 className="winner-name">Robert Fletcher</h3>
                            </div>
                        </div>

                </div>
            </section>

        </div>
    );
}

export default Home;