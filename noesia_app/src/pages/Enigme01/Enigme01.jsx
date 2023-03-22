import React from "react";
import SlidingPuzzle from "../../components/SlidingPuzzle/SlidingPuzzle";
import f11enigma02 from "../../assets/images/f11enigma02.png";

const Enigme01 = () => {
  return (
    <div>
      <SlidingPuzzle image={f11enigma02} gridSize={4} />

      <div className="encadré">
        Un secret se cache ici, pour le trouver, réfléchis,
        <br />
        Cherche la lettre après D, et les heures que l'horloge égrène à midi.
        <br />
        Associe ces indices, et tu auras enfin,
        <br />
        La clé pour dévoiler le trésor en un clin.
      </div>
    </div>
  );
};

export default Enigme01;
