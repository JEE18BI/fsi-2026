import "./Home.css";
import { useEffect, useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaEnvelope, FaChevronDown } from "react-icons/fa";

const images = [
    "/img.png",
    "/img_1.png",
    "/img_2.png",
    "/img_3.png"
];

function Home() {

    /* accordion state */
    const [openBoxes, setOpenBoxes] = useState({});

    const toggleCard = (i) => {
        setOpenBoxes((prev) => ({
            [i]: !prev[i]  // if already open, close it; otherwise open only this one
        }));
    };

    /* history slider state */
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const slider = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(slider);
    }, []);

    return (
        <div className="home">

            {/* HERO */}
            <section className="hero-clean">
                <img src="/Sydney.png" alt="Sydney" className="hero-bg" />
                <div className="hero-content">
                    <h1>Fletcher Sharpe Invitational</h1>
                    <h2>Under 35s Golf Croquet Tournament 2026</h2>
                </div>
            </section>

            {/* DETAILS */}
            <section className="details">

                <div className="details-container">

                    {/* DATE */}
                    <div className={`detail-box ${openBoxes[0] ? "active" : ""}`}>
                        <div className="detail-header" onClick={() => toggleCard(0)}>

                            <div className="detail-title">
                                <FaCalendarAlt className="detail-icon"/>
                                <h3>Date</h3>
                            </div>

                            <FaChevronDown className={`arrow ${openBoxes[0] ? "rotate" : ""}`} />

                        </div>

                        <div className={`detail-content ${openBoxes[0] ? "open" : ""}`}>
                            <div className="date-info">
                                <p className="main-date">Wednesday 22 – Sunday 26 April 2026</p>

                                <div className="schedule-box">
                                    <p>📝 <strong>Registration:</strong> Tuesday afternoon</p>
                                    <p>🏌️‍♂️ <strong>Competition:</strong> Wednesday morning</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* LOCATION */}
                    <div className={`detail-box ${openBoxes[1] ? "active" : ""}`}>
                        <div className="detail-header" onClick={() => toggleCard(1)}>

                            <div className="detail-title">
                                <FaMapMarkerAlt className="detail-icon"/>
                                <h3>Location</h3>
                            </div>

                            <FaChevronDown className={`arrow ${openBoxes[1] ? "rotate" : ""}`} />

                        </div>

                        <div className={`detail-content ${openBoxes[1] ? "open" : ""}`}>
                            <p><strong>Cooks River Croquet Club</strong></p>
                            <p>3 Richardson Crescent, Marrickville NSW.</p>

                            <div className="transport-info">
                                <p>🚆 Tempe railway station is across the road (5 mins walk).</p>
                                <p>✈️ Train connection from Sydney Airport via Central Station.</p>
                                <p>🚗 Limited parking on site.</p>
                            </div>

                            <a
                                href="https://maps.app.goo.gl/8FfvXnfFGFMXir8Z6" /* You can put the real map link here later */
                                target="_blank"
                                rel="noreferrer"
                                className="map-link"
                            >
                                View on Google Maps
                            </a>
                        </div>
                    </div>


                    {/* CONTACT */}
                    <div className={`detail-box ${openBoxes[2] ? "active" : ""}`}>
                        <div className="detail-header" onClick={() => toggleCard(2)}>

                            <div className="detail-title">
                                <FaEnvelope className="detail-icon"/>
                                <h3>Contacts</h3>
                            </div>

                            <FaChevronDown className={`arrow ${openBoxes[2] ? "rotate" : ""}`} />

                        </div>

                        <div className={`detail-content ${openBoxes[2] ? "open" : ""}`}>
                            <div className="contact-info">
                                <p className="contact-name">Greg Fletcher</p>
                                <p className="contact-desc">For tournament enquiries and registration.</p>

                                <a href="mailto:admin@ucaevents.org" className="email-link">
                                    ✉️ admin@ucaevents.org
                                </a>
                            </div>
                        </div>
                        <div className={`detail-content ${openBoxes[2] ? "open" : ""}`}>
                            <div className="contact-info">

                                <p className="contact-name">Pauline Markwell</p>
                                <p className="contact-desc">For media enquiries.</p>

                                <a href="mailto:markwell.pauline@gmail.com" className="email-link">
                                    ✉️ markwell.pauline@gmail.com
                                </a>

                                <a href="tel:+61481159189" className="phone-link">
                                    📞 0481 159 189
                                </a>

                            </div>
                        </div>

                    </div>
                </div>

            </section>
            {/* CRCC CONNECTION */}
            <section className="crcc-link-section">
                <div className="crcc-container">

                    <h2 className="crcc-title">Hosted by</h2>

                    <a
                        href="https://cooksrivercroquetclub.com/home/"
                        target="_blank"
                        rel="noreferrer"
                        className="crcc-card"
                    >
                        <img src="/img_6.png" alt="Cooks River Croquet Club" />

                        <div className="crcc-text">
                            <h3>Cooks River Croquet Club</h3>
                            <p className="p-text">
                                Click to visit the official website of the host club to learn more
                                about the venue, community, and events.
                            </p>
                        </div>
                    </a>

                </div>
            </section>


            {/* HISTORY HERO */}
            <div className="history-page">

                <div className="history-hero">
                    <img src={images[index]} alt="FSI History"/>
                    <div className="hero-overlay">
                        <h1> History of Fletcher Sharpe Invitational</h1>
                    </div>
                </div>


                {/* INTRO */}
                <section className="History">
                    <div className="history">
                        <h2>How did it start?</h2>

                        <p>
                            The Fletcher Sharpe Invitational was first played in 2024 as the brainchild of Robert Fletcher and Georgina Carnegie, then President of Cooks River Croquet Club. Alison Sharpe, a top Australian international golf (and association) croquet player, enthusiastically added her support and energy to the initiative to bring the tournament to life. FSI is Australia’s richest croquet tournament.
                        </p>

                        <p>
                            The tournament was designed to showcase young, top international golf croquet players – their skills, tactical brilliance and individual styles – and to encourage the sport among young Australians. It is also hoped that media coverage will widen public knowledge of the sport.
                        </p>

                    </div>
                </section>


                {/* 2024 */}
                <section className="history-year">
                    <h2>2024 Championship</h2>

                    <p>
                        The semi-finals featured <strong>Robert Fletcher</strong>,
                        <strong> Logan McCorkindale</strong>,
                        <strong> Aston Wade</strong>, and
                        <strong> Edward Wilson</strong>.
                    </p>

                    <p>
                        The final saw <strong>Robert Fletcher</strong> defeat
                        <strong> Aston Wade</strong>.
                    </p>

                    <div className="finalists-images">

                        <div className="player-photo">
                            <img src="/robert.jpeg" alt="Robert Fletcher" />
                            <p>Robert Fletcher</p>
                        </div>

                        <div className="player-photo">
                            <img src="/Aston.png" alt="Aston Wade" />
                            <p>Aston Wade</p>
                        </div>

                        <div className="player-photo">
                            <img src="/logan.png" alt="Logan McCorkindale" />
                            <p>Logan McCorkindale</p>
                        </div>

                        <div className="player-photo">
                            <img src="/edward.png" alt="Edward Wilson" />
                            <p>Edward Wilson</p>
                        </div>

                    </div>


                </section>


                {/* 2025 */}
                <section className="history-year">
                    <h2>2025 Championship</h2>

                    <p>
                        The semi-finals featured <strong>Edward Wilson</strong>,
                        <strong> Malcolm Fletcher</strong>,
                        <strong> Greg Fletcher</strong>, and
                        <strong> Levi Franks</strong>.
                    </p>

                    <p>
                        <strong>Malcolm Fletcher</strong> defeated
                        <strong> Greg Fletcher</strong> in the final.
                    </p>



                    <div className="finalists-images">

                        <div className="player-photo">
                            <img src="/malcolm.jpg" alt="Malcolm Fletcher" />
                            <p>Malcolm Fletcher</p>
                        </div>

                        <div className="player-photo">
                            <img src="/Greg.JPG" alt="Greg" />
                            <p>Greg Fletcher</p>
                        </div>

                        <div className="player-photo">
                            <img src="/levi.png" alt="LEVI" />
                            <p>Levi Franks</p>
                        </div>

                        <div className="player-photo">
                            <img src="/edward.png" alt="Edward Wilson" />
                            <p>Edward Wilson</p>
                        </div>

                    </div>


                </section>


                {/* PLAYER QUOTE */}
                <section className="player-quote">

                    <p className="quote-text">
                        “Croquet is important for young people because it builds focus,
                        strategic thinking, patience, and sportsmanship, while giving them
                        a fun way to stay active and socially connected.”
                    </p>

                    <p className="quote-text">
                        “Having a tournament like this creates excitement and opportunity —
                        it inspires young players to improve, builds confidence through
                        competition, and helps grow the sport of croquet.”
                    </p>

                    <span className="quote-author">
            — Felix Gelman-White
                        - young Australian croquet player
          </span>

                </section>

            </div>

        </div>
    );
}

export default Home;