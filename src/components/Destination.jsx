import { useState } from "react";
import styles from "./Destination.module.css";

function Destination({ destination }) {

  // Etat pour afficher ou masquer les details
  const [afficherDetails, setAfficherDetails] = useState(false);

  // Etat pour gerer les favoris
  const [estFavori, setEstFavori] = useState(false);

  // Fonction pour reinitialiser la carte
  const reinitialiser = () => {
    setAfficherDetails(false);
    setEstFavori(false);
  };

  return (
    <div className={styles.card}>

      <img
        src={destination.image}
        alt={destination.nom}
        className={styles.image}
      />

      <div className={styles.content}>

        <h2>{destination.nom}</h2>

        <p className={styles.country}>
          {destination.pays}
        </p>

        <p className={styles.price}>
          Prix : {destination.prix} DT
        </p>

        {/* Activite 1 : Details */}

        <button
          className={styles.detailsButton}
          onClick={() => setAfficherDetails(!afficherDetails)}
        >
          {afficherDetails
            ? "Masquer les details"
            : "Voir les details"}
        </button>

        {afficherDetails && (
          <p className={styles.description}>
            {destination.description}
          </p>
        )}

        {/* Activite 2 : Favoris */}

        <button
          className={`${styles.favoriteButton} ${
            estFavori ? styles.active : ""
          }`}
          onClick={() => setEstFavori(!estFavori)}
        >
          {estFavori
            ? "❤️ Dans mes favoris"
            : "♡ Ajouter aux favoris"}
        </button>

        {/* Defi : Reinitialiser */}

        <button
          className={styles.resetButton}
          onClick={reinitialiser}
        >
          Reinitialiser
        </button>

      </div>
    </div>
  );
}

export default Destination;