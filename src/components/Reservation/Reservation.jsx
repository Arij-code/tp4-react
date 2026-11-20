import { useState } from "react";
import styles from "./Reservation.module.css";

function Reservation() {
  // Les états du formulaire
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [destination, setDestination] = useState("");
  const [dateDepart, setDateDepart] = useState("");
  const [voyageurs, setVoyageurs] = useState("1");
  const [typeVoyage, setTypeVoyage] = useState("Économique");
  const [demandes, setDemandes] = useState("");

  // État du récapitulatif, des erreurs et du popup
  const [reservation, setReservation] = useState(null);
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  // Gestion de la soumission
  function handleSubmit(e) {
    e.preventDefault();

    const nouvellesErreurs = {};

    if (nom.trim() === "") {
      nouvellesErreurs.nom = "Veuillez saisir votre nom !";
    }

    if (email.trim() === "") {
      nouvellesErreurs.email = "Veuillez saisir votre e-mail !";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nouvellesErreurs.email = "Adresse e-mail invalide !";
    }

    if (destination === "") {
      nouvellesErreurs.destination = "Veuillez choisir une destination !";
    }

    if (dateDepart === "") {
      nouvellesErreurs.dateDepart = "Veuillez choisir une date !";
    }

    if (voyageurs === "" || Number(voyageurs) < 1) {
      nouvellesErreurs.voyageurs =
        "Le nombre de voyageurs doit être au minimum 1 !";
    }

    setErrors(nouvellesErreurs);

    if (Object.keys(nouvellesErreurs).length > 0) {
      return;
    }

    const nouvelleReservation = {
      nom,
      email,
      telephone,
      destination,
      dateDepart,
      voyageurs,
      typeVoyage,
      demandes,
    };

    setReservation(nouvelleReservation);
    setShowPopup(true);
  }

  // Réinitialisation du formulaire
  function handleReset() {
    setNom("");
    setEmail("");
    setTelephone("");
    setDestination("");
    setDateDepart("");
    setVoyageurs("1");
    setTypeVoyage("Économique");
    setDemandes("");
    setReservation(null);
    setErrors({});
    setShowPopup(false);
  }

  return (
    <div className={styles.container}>
      <h2>Formulaire de réservation</h2>

      <form onSubmit={handleSubmit} noValidate>

        {/* Nom et prénom */}
        <div>
          <label htmlFor="nom">Nom et prénom</label>
          <input
            id="nom"
            type="text"
            value={nom}
            className={errors.nom ? styles.inputError : ""}
            onChange={(e) => setNom(e.target.value)}
            placeholder="Entrez votre nom et prénom"
          />
          {errors.nom && (
            <span className={styles.errorMessage}>{errors.nom}</span>
          )}
        </div>

        {/* Adresse e-mail */}
        <div>
          <label htmlFor="email">Adresse e-mail</label>
          <input
            id="email"
            type="email"
            value={email}
            className={errors.email ? styles.inputError : ""}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="exemple@gmail.com"
          />
          {errors.email && (
            <span className={styles.errorMessage}>{errors.email}</span>
          )}
        </div>

        {/* Téléphone */}
        <div>
          <label htmlFor="telephone">Téléphone</label>
          <input
            id="telephone"
            type="tel"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            placeholder="Entrez votre numéro"
          />
        </div>

        {/* Destination */}
        <div>
          <label htmlFor="destination">Destination</label>
          <select
            id="destination"
            value={destination}
            className={errors.destination ? styles.inputError : ""}
            onChange={(e) => setDestination(e.target.value)}
          >
            <option value="">Choisir une destination</option>
            <option value="Santorin">Santorin</option>
            <option value="Bali">Bali</option>
            <option value="Rome">Rome</option>
            <option value="Istanbul">Istanbul</option>
          </select>
          {errors.destination && (
            <span className={styles.errorMessage}>
              {errors.destination}
            </span>
          )}
        </div>

        {/* Date de départ */}
        <div>
          <label htmlFor="dateDepart">Date de départ</label>
          <input
            id="dateDepart"
            type="date"
            value={dateDepart}
            className={errors.dateDepart ? styles.inputError : ""}
            onChange={(e) => setDateDepart(e.target.value)}
          />
          {errors.dateDepart && (
            <span className={styles.errorMessage}>
              {errors.dateDepart}
            </span>
          )}
        </div>

        {/* Nombre de voyageurs */}
        <div>
          <label htmlFor="voyageurs">Nombre de voyageurs</label>
          <input
            id="voyageurs"
            type="number"
            min="1"
            value={voyageurs}
            className={errors.voyageurs ? styles.inputError : ""}
            onChange={(e) => setVoyageurs(e.target.value)}
          />
          {errors.voyageurs && (
            <span className={styles.errorMessage}>
              {errors.voyageurs}
            </span>
          )}
        </div>

        {/* Type de voyage */}
        <div>
          <label>Type de voyage</label>
          <div className={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="typeVoyage"
                value="Économique"
                checked={typeVoyage === "Économique"}
                onChange={(e) => setTypeVoyage(e.target.value)}
              />
              Économique
            </label>

            <label>
              <input
                type="radio"
                name="typeVoyage"
                value="Confort"
                checked={typeVoyage === "Confort"}
                onChange={(e) => setTypeVoyage(e.target.value)}
              />
              Confort
            </label>

            <label>
              <input
                type="radio"
                name="typeVoyage"
                value="Luxe"
                checked={typeVoyage === "Luxe"}
                onChange={(e) => setTypeVoyage(e.target.value)}
              />
              Luxe
            </label>
          </div>
        </div>

        {/* Demandes particulières */}
        <div>
          <label htmlFor="demandes">Demandes particulières</label>
          <textarea
            id="demandes"
            value={demandes}
            onChange={(e) => setDemandes(e.target.value)}
            placeholder="Vos demandes particulières..."
          />
        </div>

        {/* Boutons */}
        <div className={styles.buttons}>
          <button type="submit" className={styles.submitButton}>
            Réserver
          </button>

          <button
            type="button"
            className={styles.resetButton}
            onClick={handleReset}
          >
            Réinitialiser
          </button>
        </div>
      </form>

      {/* Récapitulatif */}
      {reservation && (
        <div className={styles.recap}>
          <h3>Récapitulatif de votre réservation</h3>

          <p><strong>Nom :</strong> {reservation.nom}</p>
          <p><strong>E-mail :</strong> {reservation.email}</p>
          <p><strong>Téléphone :</strong> {reservation.telephone || "Non renseigné"}</p>
          <p><strong>Destination :</strong> {reservation.destination}</p>
          <p><strong>Date de départ :</strong> {reservation.dateDepart}</p>
          <p><strong>Voyageurs :</strong> {reservation.voyageurs}</p>
          <p><strong>Type de voyage :</strong> {reservation.typeVoyage}</p>
          <p><strong>Demandes :</strong> {reservation.demandes || "Aucune"}</p>
        </div>
      )}

      {/* Popup de confirmation */}
      {showPopup && (
        <div className={styles.overlay}>
          <div className={styles.popup}>
            <h3>Réservation confirmée !</h3>
            <p>Votre réservation a été enregistrée avec succès.</p>
            <button type="button" onClick={() => setShowPopup(false)}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Reservation;