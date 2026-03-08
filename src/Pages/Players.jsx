import "./Players.css";

const players = [
    { name: "Edward Wilson", country: "Australia", grade: 2534, img: "/players/edward.jpg" },
    { name: "Malcolm Fletcher", country: "Australia", grade: 2485, img: "/players/malcolm.jpg" },
    { name: "Levi Franks", country: "New Zealand", grade: 2470, img: "/players/levi.jpg" },
    { name: "Greg Fletcher", country: "Australia", grade: 2447, img: "/players/greg.jpg" },
    { name: "Josh Winter", country: "New Zealand", grade: 2283, img: "/players/josh.jpg" },
    { name: "Felix Gelman-White", country: "Australia", grade: 2245, img: "/players/felix.jpg" },
    { name: "Paul Kaiser", country: "New Zealand", grade: 2215, img: "/players/paul.jpg" },
    { name: "Nathan Bullen", country: "New Zealand", grade: 2104, img: "/players/nathan.jpg" },
    { name: "Jason Hodgett", country: "New Zealand", grade: 2096, img: "/players/jason.jpg" },
    { name: "Mikey Lauer", country: "New Zealand", grade: 2065, img: "/players/mikey.jpg" },
    { name: "Luke Francis", country: "New Zealand", grade: 2032, img: "/players/luke.jpg" },
    { name: "James Duggan", country: "New Zealand", grade: 2006, img: "/players/james-duggan.jpg" },
    { name: "Mattie Clarkeson", country: "New Zealand", grade: 1998, img: "/players/mattie.jpg" },
    { name: "Ben Bowen", country: "Australia", grade: 1650, img: "/players/ben.jpg" },
    { name: "James Mason", country: "Australia", grade: 1520, img: "/players/james-mason.jpg" }
];

function Players() {

    const sortedPlayers = [...players].sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    return (
        <section className="players-section">

            <h1 className="players-title">Players</h1>

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