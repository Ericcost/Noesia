import React from "react";
import SlidingPuzzle from "../../components/SlidingPuzzle/SlidingPuzzle";
import f11enigma02 from "../../assets/images/f11enigma02.png";
import SpanizeLetters from "../../components/SpanizeLetters/SpanizeLetters";
import "./Enigme01.scss";

const Enigme01 = () => {
  return (
      <div className="mast">
        <div className="mast__left">
          <SlidingPuzzle image={f11enigma02} gridSize={4} />
        </div>
        <div className="mast__right">
          <h1 className="mast__title">
            <SpanizeLetters>
              Une énigme informatique se cache ici, pour la résoudre, réfléchis
              bien.
            </SpanizeLetters>
          </h1>
          <hr className="sep" />
          <p className="mast__text">
            <SpanizeLetters>
              Cherche la lettre qui vient après D et les doigts que tu as sur
              les deux mains, plus un. Dans l'univers numérique, cela te permet
              d'avoir un aperçu plus grand. Associe ces éléments avec
              ingéniosité, et en un instant, La clé pour passer en plein écran,
              tu auras enfin.
            </SpanizeLetters>
          </p>
        </div>
      </div>
  );
};

export default Enigme01;
