import "./History.css";
import { useState, useEffect } from "react";

const images = [
    "/img.png",
    "/img_1.png",
    "/img_2.png",
    "/img_3.png",


];

function History() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const slider = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 1000);

        return () => clearInterval(slider);
    }, []);

    return (
        <div className="history-page">

            {/* HERO SLIDER */}
            <div className="history-hero">
                <img src={images[index]} alt="FSI History" />
                <div className="hero-overlay">
                    <h1>The Legacy of Fletcher Sharpe Invitational</h1>
                </div>
            </div>

            {/* INTRO MESSAGE */}
            <section className="history-intro">
                <p>
                    The Fletcher Sharpe Invitational was created to celebrate the next generation
                    of elite golf croquet talent. Since its inception, the tournament has showcased
                    rising international stars, tactical brilliance, and unforgettable championship moments.
                </p>

                <div className="intro-images">
                    <img src="/img_4.png" alt="FSI action 1" />
                    <img src="/img_5.png" alt="FSI action 2" />
                </div>
            </section>

            {/* 2024 */}
            <section className="history-year">
                <h2>2024 Championship</h2>
                <p>
                    The inaugural Fletcher Sharpe Invitational in 2024 set the tone for excellence.
                    Players from Australia, New Zealand, America and England competed at the highest level.
                </p>


                <p>
                    The semi-finals featured <strong>Robert Fletcher</strong>, <strong> Logan McCorkindale</strong>,
                    <strong> Aston Wade</strong>, and <strong>Edward Wilson</strong>.
                </p>

                <p>
                    In a thrilling final, <strong> Robert Fletcher </strong> faced
                    <strong> Aston Wade</strong>, with <strong> Robert Fletcher </strong>
                    claiming the championship title.
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
                    Building on its success, the 2025 edition elevated the tournament
                    to new heights with stronger international representation.
                </p>

                <p>
                    The semi-finals featured <strong>Edward Wilson </strong>, <strong>Malcolm Fletcher </strong>,
                    <strong>Greg Fletcher </strong>, and <strong>Levi Franks</strong>.
                </p>

                <p>
                    The final saw <strong>Malcolm Fletcher</strong> compete against
                    <strong> Greg Fletcher</strong>, with <strong>Malcolm Fletcher </strong>
                    crowned champion.
                </p>
                <div className="finalists-images">
                    <img src="/Greg.JPG" alt="2025 Finalist 1" />
                    <img src="/2025-finalist2.jpg" alt="2025 Finalist 2" />
                </div>
            </section>

        </div>
    );
}

export default History;