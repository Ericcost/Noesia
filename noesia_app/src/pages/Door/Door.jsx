import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Code from "../../assets/images/door-code02.png";
import Cursor from "../../components/Cursor/Cursor"
import Button from "../../components/Button/Button";
import ButtonLink from "../../components/ButtonLink/ButtonLink"
import "./Door.scss";

export default function Door() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleButtonClick = (character) => {
    if (
      inputValue.length < 3 &&
      ["@", "$", "€", "&", "%", "£", "+", "#"].includes(character)
    ) {
      setInputValue(inputValue + character);
    }
  };

  const handleSubmit = () => {
    if (inputValue === "@$€") {
      console.log(
        "Avec une satisfaction intense, vous prononcez 'connaissance' à haute voix. Et alors, la porte massive s'ouvre lentement, révélant un nouveau monde fascinant et rempli de merveilles insoupçonnées. Vous franchissez la porte, prêt à explorer ce nouveau monde avec une soif insatiable de connaissances et de découvertes."
      );
      navigate("/carte");
      // Remplacez le console.log par le code pour amener l'utilisateur à la page Map
    } else {
      setInputValue("");
    }
  };

  return (
    <>
      <Cursor />
      <div className="door">
        <img className="door-code-img" src={Code} alt="door terminal" />
        <div className="door-screen">
          <div className="special-buttons">
            <div className="buttons-left">
              <Button content="&" onClick={() => handleButtonClick("&")} />
              <Button content="€" onClick={() => handleButtonClick("€")} />
              <Button content="@" onClick={() => handleButtonClick("@")} />
              <Button content="$" onClick={() => handleButtonClick("$")} />
            </div>
          </div>

          <div className="special-center">
            <div className="door-script">
              <input type="text" value={inputValue} readOnly />
              <p className="door-script-text">
                Vous êtes sur le point d'explorer un nouveau monde, mais pour y
                accéder, vous devez d'abord résoudre une énigme. La voici :{" "}
                <br></br>
                "Je suis l'outil de ceux qui cherchent à <strong>@</strong>
                pprendre,
                <br></br>
                Certains me voient comme un vecteur de bonheur,<br></br>
                D'autres comme un moyen de <strong>$</strong>emer le malheur.
                <br></br>
                Mais ma véritable utilité est entre les mains,<br></br>
                De ceux qui ont la sag<strong>€</strong>sse et l'intention divine.
                <br></br>
                Si tu veux accéder à ce nouveau monde prometteur,<br></br>
                Dis-moi, ami, quel est donc mon nom avec vigueur ?"<br></br>
                <br></br>
                Trouvez les 3 caractères spéciaux qui se cachent dans cette énigme
                et vous pourrez franchir le portail vers un nouveau monde rempli
                de découvertes passionnantes et de merveilles insoupçonnées.
              </p>
              <button onClick={handleSubmit}>Valider</button>
            </div>
          </div>

          <div className="special-buttons">
            <div className="buttons-right">
              <Button content="%" onClick={() => handleButtonClick("%")} />
              <Button content="£" onClick={() => handleButtonClick("£")} />
              <Button content="+" onClick={() => handleButtonClick("+")} />
              <Button content="#" onClick={() => handleButtonClick("#")} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
