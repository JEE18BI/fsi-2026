import "./Home.css";
import { useEffect, useState } from "react";
import {FaCalendarAlt, FaMapMarkerAlt, FaEnvelope, FaChevronDown, FaTrophy} from "react-icons/fa";
import { FaVideo } from "react-icons/fa";

const images = [
    "/img.png",
    "/img_1.png",
    "/img_2.png",
    "/img_3.png"
];

function Home() {

    /* accordion state */
    // const [openBoxes, setOpenBoxes] = useState({});
    //
    // const toggleCard = (i) => {
    //     setOpenBoxes((prev) => ({
    //         [i]: !prev[i]  // if already open, close it; otherwise open only this one
    //     }));
    // };

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
                <img src="/hero.png" alt="Sydney" className="hero-bg"/>

            </section>
            <p className="tournament-title">
                FLETCHER SHARPE <span>INVITATIONAL 2027</span>
            </p>
            {/* DETAILS */}
            {/* TOURNAMENT DETAILS */}
            <section className="details">
                <div className="details-layout">

                    {/* TOURNAMENT INFORMATION */}
                    <div className="details-container">

                        {/* DATE */}
                        <div className="detail-box">
                            <div className="detail-title">
                                <FaCalendarAlt className="detail-icon"/>
                                <h3>Date</h3>
                            </div>

                            <div className="detail-info">
                                <p className="detail-main">
                                    Thursday 22 – Monday 26 April 2027
                                </p>

                                <div className="detail-highlight">
                                    <FaCalendarAlt />
                                    Booking deadline: 15th March 2027
                                </div>

                                <div className="detail-highlight">
                                    <FaTrophy />
                                    Entry Fee: $295
                                    <span className="student-fee">Students: $150</span>
                                </div>
                            </div>
                        </div>

                        {/* LOCATION + VIDEO */}
                        <div className="detail-box location-card">
                            <div className="detail-title">
                                <FaMapMarkerAlt className="detail-icon"/>
                                <h3>Location</h3>
                            </div>

                            <div className="detail-info">
                                <p className="detail-main">
                                    Caloundra Mallet Sports Club
                                </p>

                                <p>Caloundra, Queensland, Australia</p>

                                <div className="location-video-container">
                                    <div className="video-heading">
                                        <FaVideo/>
                                        Discover the Venue
                                    </div>

                                    <video
                                        className="location-video"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        controls
                                        preload="metadata"
                                    >
                                        <source src="/vid.mp4" type="video/mp4"/>
                                        Your browser does not support this video.
                                    </video>

                                    <p className="video-caption">
                                        Caloundra Mallet Sports Club · Queensland, Australia
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CONTACTS */}
                        <div className="detail-box">
                            <div className="detail-title">
                                <FaEnvelope className="detail-icon"/>
                                <h3>Contacts</h3>
                            </div>

                            <div className="detail-info contact-info">
                                <p className="contact-name">Alison Sharpe</p>

                                <p className="contact-desc">
                                    For tournament enquiries and registration.
                                </p>

                                <a href="mailto:Croquet1@outlook.com" className="email-link">
                                    ✉️ Croquet1@outlook.com
                                </a>

                                <div className="contact-divider"></div>

                                <p className="contact-name">Murray Tinker</p>

                                <p className="contact-desc">
                                    For media enquiries.
                                </p>

                                <a href="mailto:2tinkers@gmail.com" className="email-link">
                                    ✉️ 2tinkers@gmail.com

                                </a>


                            </div>
                        </div>

                        {/* LIVE STREAMING */}
                        <div className="detail-box">
                            <div className="detail-title">
                                <FaVideo className="detail-icon"/>
                                <h3>Live Streaming</h3>
                            </div>

                            <div className="detail-info">
                                <p className="detail-main">
                                    Monday 26 April
                                </p>

                                <div className="detail-highlight">
                                    <FaVideo/> Live coverage of the tournament
                                </div>
                            </div>
                        </div>

                    </div>
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
                            The Fletcher Sharpe Invitational was first played in 2024 as the brainchild of Robert
                            Fletcher and Georgina Carnegie, then President of Cooks River Croquet Club. Alison Sharpe, a
                            top Australian international golf (and association) croquet player, enthusiastically added
                            her support and energy to the initiative to bring the tournament to life. FSI is Australia’s
                            richest croquet tournament.
                        </p>

                        <p>
                            The tournament was designed to showcase young, top international golf croquet players –
                            their skills, tactical brilliance and individual styles – and to encourage the sport among
                            young Australians. It is also hoped that media coverage will widen public knowledge of the
                            sport.
                        </p>

                    </div>
                </section>

                {/* 2026 */}
                <section className="history-year">
                    <h2>2026 Championship</h2>

                    <p>
                        The semi-finals featured <strong>Edward Wilson</strong>,
                        <strong> Felix Gelman White</strong>,
                        <strong> Josh Winter </strong>,
                        and
                        <strong> Levi Franks</strong>.
                    </p>

                    <p>
                        <strong>Edward Wilson</strong> defeated
                        <strong> Levi Franks</strong> in the final.
                    </p>


                    <div className="finalists-images">

                        <div className="player-photo">
                            <img src="/edward.png" alt="edward"/>
                            <p>Edward Wilson</p>
                        </div>

                        <div className="player-photo">
                            <img src="/levi.png" alt="Levi"/>
                            <p>Levi Franks</p>
                        </div>

                        <div className="player-photo">
                            <img src="/felix.png" alt="felix"/>
                            <p>Felix Gelman White</p>
                        </div>

                        <div className="player-photo">
                            <img src="/josh_winter.jpg" alt="Josh Winter"/>
                            <p>Josh Winter</p>
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
                            <img src="/malcolm.jpg" alt="Malcolm Fletcher"/>
                            <p>Malcolm Fletcher</p>
                        </div>

                        <div className="player-photo">
                            <img src="/Greg.JPG" alt="Greg"/>
                            <p>Greg Fletcher</p>
                        </div>

                        <div className="player-photo">
                            <img src="/levi.png" alt="LEVI"/>
                            <p>Levi Franks</p>
                        </div>

                        <div className="player-photo">
                            <img src="/edward.png" alt="Edward Wilson"/>
                            <p>Edward Wilson</p>
                        </div>

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
                            <img src="/robert.jpeg" alt="Robert Fletcher"/>
                            <p>Robert Fletcher</p>
                        </div>

                        <div className="player-photo">
                            <img src="/Aston.png" alt="Aston Wade"/>
                            <p>Aston Wade</p>
                        </div>

                        <div className="player-photo">
                            <img src="/logan.png" alt="Logan McCorkindale"/>
                            <p>Logan McCorkindale</p>
                        </div>

                        <div className="player-photo">
                            <img src="/edward.png" alt="Edward Wilson"/>
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
                {/*<section*/}
                {/*    className="crcc-link-section"*/}
                {/*    style={{*/}
                {/*        backgroundImage: "url('/cookwood.jpeg')",*/}
                {/*        backgroundSize: "cover",*/}
                {/*        backgroundPosition: "center",*/}
                {/*        backgroundRepeat: "no-repeat",*/}
                {/*        position: "relative"*/}
                {/*    }}*/}
                {/*>*/}

                {/*    /!* overlay *!/*/}
                {/*    <div style={{*/}
                {/*        position: "absolute",*/}
                {/*        inset: 0,*/}
                {/*        background: "rgba(0,0,0,0.03)",*/}
                {/*        zIndex: 1,*/}

                {/*    }}/>*/}

                    {/*<div className="crcc-container" style={{position: "relative", zIndex: 2}}>*/}


                    {/*    <a*/}
                    {/*        href="https://cooksrivercroquetclub.com/home/"*/}
                    {/*        target="_blank"*/}
                    {/*        rel="noreferrer"*/}
                    {/*        className="crcc-card"*/}
                    {/*    ><h2 className="crcc-title">Hosted by</h2>*/}
                    {/*        <img src="/img_6.png" alt="Cooks River Croquet Club"/>*/}

                    {/*        <div className="crcc-text">*/}
                    {/*            <h3>Cooks River Croquet Club</h3>*/}
                    {/*            <p className="p-text">*/}
                    {/*                Click to visit the official website of the host club to learn more*/}
                    {/*                about the venue, community, and events.*/}
                    {/*            </p>*/}
                    {/*        </div>*/}
                    {/*    </a>*/}

                    {/*</div>*/}
                {/*</section>*/}

            </div>

        </div>
    );
}

export default Home;