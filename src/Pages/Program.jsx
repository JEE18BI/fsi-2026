import "./Program.css";

function Program() {
    return (
        <section className="program">

            <div className="program-container">

                <h1 className="program-title">Tournament Details </h1>

                <div className="timeline">

                    {/* 21 APR */}
                    <div className="timeline-item">
                        <div className="timeline-date">
                            <span className="date-number">21</span>
                            <span className="date-month">APR</span>
                        </div>

                        <div className="timeline-content">
                            <h3>Tuesday</h3>
                            <ul>
                                <li>2:00pm – 4:00pm Registration & Practice</li>
                            </ul>
                        </div>
                    </div>

                    {/* 22 APR */}
                    <div className="timeline-item">
                        <div className="timeline-date">
                            <span className="date-number">22</span>
                            <span className="date-month">APR</span>
                        </div>

                        <div className="timeline-content">
                            <h3>Wednesday</h3>
                            <ul>
                                <li>7:00am – Court set up and breakfast</li>
                                <li>8:00am – Official Welcome Ceremony</li>
                                <li>8:30am – Block play commences</li>
                            </ul>
                        </div>
                    </div>

                    {/* 23 APR */}
                    <div className="timeline-item">
                        <div className="timeline-date">
                            <span className="date-number">23</span>
                            <span className="date-month">APR</span>
                        </div>

                        <div className="timeline-content">
                            <h3>Thursday</h3>
                            <ul>
                                <li>7:00am – Court set up</li>
                                <li>8:00am – Block play concludes</li>
                                <li>Championship X Quarter Finals</li>
                                <li>Plate block commences</li>
                            </ul>
                        </div>
                    </div>

                    {/* 24 APR */}
                    <div className="timeline-item">
                        <div className="timeline-date">
                            <span className="date-number">24</span>
                            <span className="date-month">APR</span>
                        </div>

                        <div className="timeline-content">
                            <h3>Friday</h3>
                            <ul>
                                <li>7:00am – Court set up</li>
                                <li>8:00am – Championship X & Z Semi Finals</li>
                                <li>Plate block concludes</li>
                            </ul>
                        </div>
                    </div>

                    {/* 25 APR */}
                    <div className="timeline-item highlight">
                        <div className="timeline-date">
                            <span className="date-number">25</span>
                            <span className="date-month">APR</span>
                        </div>

                        <div className="timeline-content">
                            <h3>Saturday – Anzac Day</h3>
                            <ul>
                                <li>7:30am – Court set up and practice</li>
                                <li>8:30am – Anzac Day Ceremony</li>
                                <li>
                                    8:45am – Championship X Final (Bo5),
                                    3rd/4th Playoff (Bo5),
                                    Z Final (Bo3),
                                    Plate Semi Final & Final
                                </li>
                                <li>Approx. 2:00pm – Prize Giving Ceremony</li>
                            </ul>
                        </div>
                    </div>

                </div>           </div>
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