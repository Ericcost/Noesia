import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchGet, useFetchPut } from "../../hooks/fetchData/useFetchData";
import Cursor from "../../components/Cursor/Cursor"
import Button from "../../components/Button/Button";
import ButtonDoor from "../../components/ButtonDoor/ButtonDoor"
import "./Door.scss";

export default function Door() {

  const auth_token = localStorage.getItem('Authorization_token');
  const { data: userData } = useFetchGet('member-data', 'user', auth_token);

  const current_user = userData?.user;

  const { mutate: updateUser } = useFetchPut(`users`, 'user', auth_token);

  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const isDoorPassed = {is_door_passed: true}

  const handleButtonClick = (character) => {
    if (
      inputValue.length < 3 &&
      ["@", "$", "€", "&", "%", "£", "+", "#"].includes(character)
    ) {
      setInputValue(inputValue + character);
    }
  };

  const handleSubmit = () => {
    if (inputValue === "$€@") {
      console.log(
        "Avec une satisfaction intense, vous prononcez 'connaissance' à haute voix. Et alors, la porte massive s'ouvre lentement, révélant un nouveau monde fascinant et rempli de merveilles insoupçonnées. Vous franchissez la porte, prêt à explorer ce nouveau monde avec une soif insatiable de connaissances et de découvertes."
      );
      if (auth_token && userData) {
        updateUser(isDoorPassed);
      } else {
        localStorage.setItem("is_door_passed", true);
      }
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
        <div className="door-content">
          <div className="door-buttons">
            <div className="buttons-left">
              <div className="buttons-animate">
                <ButtonDoor content="&" onClick={() => handleButtonClick("&")} />
                <Button />
                <Button />
              </div>
              <div className="buttons-animate">
                <ButtonDoor content="€" onClick={() => handleButtonClick("€")} />
                <Button />
                <Button />
              </div>
              <div className="buttons-animate">
                <ButtonDoor content="#" onClick={() => handleButtonClick("#")} />
                <Button />
                <Button />
              </div>
              <div className="buttons-animate">
                <ButtonDoor content="@" onClick={() => handleButtonClick("@")} />
                <Button />
                <Button />
              </div>
            </div>
          </div>

          <div className="door-code">
            <div className="door-screen">
              <Button />
              <input type="text" value={inputValue} readOnly />
              <Button />
            </div>
            <div className="door-script">
              <p>
                Vous êtes sur le point d'explorer un nouveau monde, mais pour y
                accéder, vous devez d'abord résoudre une énigme. La voici :{" "}
              </p>
                <br />
              <p>
                "Je <strong>$</strong>uis l'outil de ceux qui cherchent à apprendre,
                Certains me voient comme un vecteur de bonheur,
                D'autres comme un moyen de semer le malheur.
              </p>
                <br />
              <p>
                Mais ma véritable utilité est entre les mains,
                De ceux qui ont la sag<strong>€</strong>sse et l'intention divine.
              </p>
                <br />
              <p>
                Si tu veux accéder à ce nouveau monde prometteur,
                Dis-moi, <strong>@</strong>mi, quel est donc mon nom avec vigueur ?"
              </p>
                <br />
              <p>
                Trouvez les 3 caractères spéciaux qui se cachent dans cette énigme
                et vous pourrez franchir le portail vers un nouveau monde rempli
                de découvertes passionnantes et de merveilles insoupçonnées.
              </p>
            </div>
            <div className="door-validate">
              <Button />
              <Button />
              <ButtonDoor onClick={handleSubmit} content="Valider"/>
              <Button />
              <Button />
            </div>
          </div>

          <div className="door-buttons">
            <div className="buttons-right">
              <div className="buttons-animate">
                <ButtonDoor content="%" onClick={() => handleButtonClick("%")} />
                <Button />
                <Button />
              </div>
              <div className="buttons-animate">
                <ButtonDoor content="£" onClick={() => handleButtonClick("£")} />
                <Button />
                <Button />
              </div>
              <div className="buttons-animate">
                <ButtonDoor content="$" onClick={() => handleButtonClick("$")} />
                <Button />
                <Button />
              </div>
              <div className="buttons-animate">
                <ButtonDoor content="+" onClick={() => handleButtonClick("+")} />
                <Button />
                <Button />
              </div>
            </div>
          </div>
        </div>
        {/* <img className="door-background" src={Code} alt="door terminal"></img> */}
      </div>
    </>
  );
}
