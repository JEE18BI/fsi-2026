import "./Players.css";

const players = [
    { name: "Edward Wilson", country: "Australia", grade: 2534, img: "/edward.png" },

    { name: "Levi Franks", country: "New Zealand", grade: 2470, img: "/levi.png" },

    { name: "Josh Winter", country: "New Zealand", grade: 2283, img: "/josh_winter.jpg" },
    { name: "Felix Gelman-White", country: "Australia", grade: 2245, img: "/felix.png" },
    { name: "Paul Kaiser", country: "New Zealand", grade: 2215, img: "/missing.png" },
    { name: "Nathan Bullen", country: "New Zealand", grade: 2104, img: "/nathan_bullen.jpeg" },
    { name: "Jason Hodgett", country: "New Zealand", grade: 2096, img: "/missing.png" },
    { name: "Mikey Lauer", country: "New Zealand", grade: 2065, img: "/mikey.jpg" },
    { name: "Luke Francis", country: "New Zealand", grade: 2032, img: "/luke.jpg" },
    { name: "James Duggan", country: "New Zealand", grade: 2006, img: "/james_duggan.jpg" },
    { name: "Mattie Clarkson", country: "New Zealand", grade: 1998, img: "/mattie.png" },

    { name: "James Mason", country: "Australia", grade: 1520, img: "/missing.png" },{ name: "Addison Matthews", country: "Australia", grade: 2240, img: "/addison.png" },
    { name: "Casey De-Vene", country: "Australia", grade: 1849, img: "/missing.png" }, { name: "Robert Fletcher", country: "Australia", grade: 2748, img: "/robert.jpeg" },

];

function Players() {
    const sortedPlayers = [...players].sort((a, b) => b.grade - a.grade);


    return (
        <section className="players-section">

            <h1 className="players-title">Meet The Players</h1>

            <div className="players-grid">

                {sortedPlayers.map((player, index) => (
                    <div className="player-card" key={index}>

                        <img src={player.img} alt={player.name} />

                        <h3>{player.name}</h3>

                        <p className="country">{player.country}</p>

                        <span className="grade">D-Grade: {player.grade}</span>

                    </div>
                ))}

            </div>

        </section>
    );
}

export default Players;