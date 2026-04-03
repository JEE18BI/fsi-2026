import './Contact.css'

function Contact(){
    return (
        <section className="contact-section">
            <div className="contact-container">

                {/* LEFT SIDE */}
                <div className="contact-left">
                    <h1>Contact Us</h1>
                    <p className="contact-text">
                        For any enquiries, please reach out to the appropriate contact below.
                        We're happy to assist you.
                    </p>

                    <div className="contact-cards">

                        {/* GREG */}
                        <div className="contact-card">
                            <img src="/Alison.jpg" alt="Greg Fletcher" />
                            <h3>Alison Sharpe</h3>
<p>Player Liaison</p>

                            <a href="mailto:Croquet1@outlook.com">✉️ Croquet1@outlook.com</a>
                        </div>

                        {/* PAULINE */}
                        <div className="contact-card">
                            <img src="/pauline.png" alt="Pauline Markwell" />
                            <h3>Pauline Markwell</h3>
<p>Player Liaison</p>

                            <a href="mailto:markwell.pauline@gmail.com">
                                ✉️ markwell.pauline@gmail.com
                            </a>
                            <a href="tel:+61481159189">
                                📞 0481 159 189
                            </a>
                        </div>

                    </div>
                </div>

                {/* RIGHT SIDE (optional illustration or empty) */}
                <div className="contact-right">
                    <img src="/contact-us.png" alt="contact" />
                </div>

            </div>
        </section>
    )
}

export default Contact