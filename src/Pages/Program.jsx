import "./Program.css";

function Program() {
    return (
        <section className="program">

            <div className="program-container">

                <h1 className="program-title">Tournament Details </h1>

                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-date">
                            <span className="date-number">21</span>
                            <span className="date-month">APR</span>
                        </div>

                        <div className="timeline-content">
                            <h3>Tuesday</h3>
                            <ul>
                                <li>2:00pm - 4:00pm Registration</li>

                            </ul>
                        </div>
                    </div>
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
                                <li>Plate Events Commence (Bo3)</li>
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
                            <h3>Saturday – Anzac Day - Australian National Holiday</h3>
                            <ul>
                                <li>9:00am - Court set up and warm up</li>
                                <li>9:45am – Anzac Day Ceremony</li>
                                <li>10:00am – Knockout Semi Finals (Bo5)</li>
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
                                <li>8:00am – Knockout Final (Bo5)</li>
                                <li>Plate Final (Bo3)</li>
                                <li>2:00pm – Prize Giving Ceremony</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div className="prize-pool">
                <h1 className="program-title">
                    Prize Pool
                </h1>

                    <ul className="prize-list">
                        <li>
                            Winner           	$6,000


                        </li>
                        <li>
                            Runner-Up     	$3,000

                        </li>
                        <li>
                            3rd place         	$1,500

                        </li>
                        <li>
                            4th place         	$1,000

                        </li>
                        <li>
                            ‘Z’ winner       	$750

                        </li>
                        <li>
                            ‘Y’ winner       	$500

                        </li>
                        <li>
                            ‘W’ winner     	$300

                        </li>
                        <li>
                            Plate winner  	$250

                        </li>
                        <li>
                            Block Winners  $250
                        </li>
                    </ul>


            </div>
        </section>

    );
}

export default Program;