import destinations from "./data/destinations.js";
import Destination from "./components/Destination.jsx";
import Reservation from "./components/Reservation/Reservation.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">

      <header className="header">
        <h1>✈ TRAVEL AGENCY</h1>
        <p>Découvrez les plus belles destinations du monde</p>
      </header>

      <main className="main">

        <h2 className="sectionTitle">
          Nos Destinations
        </h2>

        <div className="destinations">

          {destinations.map((destination) => (
            <Destination
              key={destination.id}
              destination={destination}
            />
          ))}

        </div>

        {/* Formulaire de réservation */}
        <Reservation />

      </main>

      <footer className="footer">
        <p>© 2026 Travel Agency - Tous droits réservés</p>
      </footer>

    </div>
  );
}

export default App;