import "./Home.css";
import { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";

const images = [
    "/img.png",
    "/img_1.png",
    "/img_2.png",
    "/img_3.png",
];

function Home() {

    // ✅ STATE MUST BE AT TOP
    const [index, setIndex] = useState(0);

    // ✅ EFFECT AFTER STATE
    useEffect(() => {
        const slider = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000); // changed to 3s (1s is too fast)

        return () => clearInterval(slider);
    }, []);

    return (
        <div className="home">

            {/* HERO SECTION */}
            <section className="hero-clean">
                <img src="/Sydney.png" alt="Sydney" className="hero-bg" />
                <div className="hero-content">
                    <h1>Fletcher Sharpe Invitational </h1>

                    <h2>Under 35s Golf Croquet Tournament 2026</h2>
                </div>
            </section>

            {/* EVENT DETAILS */}
            <section className="details">
                <div className="details-container">
                    <div className="detail-box">
                        <h3>Date</h3>
                        <p>Wednesday 22 – Sunday 26 April 2026</p>
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

            {/* HISTORY INTRO */}


            {/* PAST WINNERS */}


            {/* HISTORY SLIDER */}
            <div className="history-page">

                <div className="history-hero">
                    <img src={images[index]} alt="FSI History" />
                    <div className="hero-overlay">
                        <h1>The History of Fletcher Sharpe Invitational</h1>
                    </div>
                </div>
                <section className="History">
                    <div className="history">
                        <h2>How did it start?</h2>
                        <p> The Fletcher Sharpe Invitational was first played in 2024 as the brainchild of Robert Fletcher and Georgina Carnegie, then President of Cooks River Croquet Club. Alison Sharpe, a top Australian international golf (and association) croquet player, enthusiastically added her support and energy to the initiative to bring the tournament to life. FSI is Australia’s richest croquet tournament.  </p> <p> The tournament was designed to showcase young, top international golf croquet players – their skills, tactical brilliance and individual styles – and to encourage the sport among young Australians. It is also hoped that media coverage will widen public knowledge of the sport. </p>
                    </div>
                </section>
                {/* 2024 */}
                <section className="history-year">
                    <h2>2024 Championship</h2>
                    <p>
                        The semi-finals featured <strong>Robert Fletcher</strong>,
                        <strong> Logan McCorkindale</strong>,
                        <strong> Aston Wade</strong>,
                        and <strong>Edward Wilson</strong>.
                    </p>

                    <p>
                        In a thrilling final, <strong>Robert Fletcher</strong> faced
                        <strong> Aston Wade</strong>, with
                        <strong> Robert Fletcher</strong> claiming the title.
                    </p>

                    <div className="finalists-images">
                        <img src="/robert.jpeg" alt="2024 Finalist 1" />
                        <img src="/Aston.png" alt="2024 Finalist 2" />
                    </div>
                </section>

                {/* 2025 */}
                <section className="history-year">
                    <h2>2025 Championship</h2>
                    <p>
                        The semi-finals featured <strong>Edward Wilson</strong>,
                        <strong> Malcolm Fletcher</strong>,
                        <strong> Greg Fletcher</strong>,
                        and <strong>Levi Franks</strong>.
                    </p>

                    <p>
                        The final saw <strong>Malcolm Fletcher</strong> compete against
                        <strong> Greg Fletcher</strong>, with
                        <strong> Malcolm Fletcher</strong> crowned champion.
                    </p>

                    <div className="finalists-images">
                        <img src="/Greg.JPG" alt="2025 Finalist 1" />
                        <img src="/2025-finalist2.jpg" alt="2025 Finalist 2" />
                    </div>
                </section>
                <section className="player-quote">
                    <p className="quote-text">
                        “Croquet is important for young people because it builds focus, strategic thinking,
                        patience, and sportsmanship, while giving them a fun way to stay active and socially connected.
                    </p>

                    <p className="quote-text">
                        Having a tournament like this creates excitement and opportunity — it inspires young players
                        to improve, builds confidence through competition, and helps grow the sport of croquet by
                        bringing the younger croquet community together and showcasing the next generation of talent.”
                    </p>

                    <span className="quote-author">
        — Young Australian Player
    </span>
                </section>
            </div>
        </div>
    );
}

export default Home;