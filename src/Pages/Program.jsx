import "./Program.css";

function Program() {
    return (
        <section className="program">
            <div className="program-container">

                <h1 className="program-title">Tournament Program</h1>

                <div className="timeline">

                    {/* DAY 1 */}
                    <div className="timeline-item">
                        <div className="timeline-date">
                            <span className="date-number">22</span>
                            <span className="date-month">APR</span>
                        </div>

                        <div className="timeline-content">
                            <h3>Wednesday</h3>
                            <ul>
                                <li>7:00am – Court setup & breakfast</li>
                                <li>8:00am – Official Welcome Ceremony</li>
                                <li>8:30am – Block play commences</li>
                            </ul>
                        </div>
                    </div>

                    {/* DAY 2 */}
                    <div className="timeline-item">
                        <div className="timeline-date">
                            <span className="date-number">23</span>
                            <span className="date-month">APR</span>
                        </div>

                        <div className="timeline-content">
                            <h3>Thursday</h3>
                            <ul>
                                <li>7:00am – Court setup & warm up</li>
                                <li>8:00am – Block play continues</li>
                            </ul>
                        </div>
                    </div>

                    {/* DAY 3 */}
                    <div className="timeline-item">
                        <div className="timeline-date">
                            <span className="date-number">24</span>
                            <span className="date-month">APR</span>
                        </div>

                        <div className="timeline-content">
                            <h3>Friday</h3>
                            <ul>
                                <li>1st Round Knockout (Bo3)</li>
                                <li>Quarter Finals (Bo5)</li>
                                <li>Plate Events Commence</li>
                            </ul>
                        </div>
                    </div>

                    {/* DAY 4 */}
                    <div className="timeline-item highlight">
                        <div className="timeline-date">
                            <span className="date-number">25</span>
                            <span className="date-month">APR</span>
                        </div>

                        <div className="timeline-content">
                            <h3>Saturday – Anzac Day</h3>
                            <ul>
                                <li>9:45am – Anzac Day Ceremony</li>
                                <li>10:00am – Semi Finals</li>
                                <li>Plate Events Continue</li>
                            </ul>
                        </div>
                    </div>

                    {/* DAY 5 */}
                    <div className="timeline-item">
                        <div className="timeline-date">
                            <span className="date-number">26</span>
                            <span className="date-month">APR</span>
                        </div>

                        <div className="timeline-content">
                            <h3>Sunday</h3>
                            <ul>
                                <li>8:00am – Knockout Final</li>
                                <li>Plate Final</li>
                                <li>2:00pm – Prize Giving Ceremony</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Program;