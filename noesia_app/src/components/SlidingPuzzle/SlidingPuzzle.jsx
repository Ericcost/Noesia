import React, { useState, useEffect } from "react";
import Tile from "../Tile/Tile.jsx";
import ButtonLink from "../ButtonLink/ButtonLink.jsx";
import "./SlidingPuzzle.scss";

const SlidingPuzzle = ({ image, gridSize }) => {
  const TILE_COUNT = gridSize * gridSize;
  const BOARD_SIZE = 640;
  const TILE_SIZE = BOARD_SIZE / gridSize;

  const generateSolvedTiles = () => {
    const initialTiles = Array.from(
      { length: TILE_COUNT - 1 },
      (_, i) => i + 1
    ).concat(0);
    return initialTiles;
  };

  const solvedTiles = generateSolvedTiles();

  const [tiles, setTiles] = useState([]);
  const [puzzleSolved, setPuzzleSolved] = useState(false);

  // Génère les tuiles initiales
  const generateInitialTiles = () => {
    const initialTiles = Array.from(
      { length: TILE_COUNT - 1 },
      (_, i) => i + 1
    ).concat(0);
    return initialTiles;
  };

  useEffect(() => {
    setTiles(shuffle(generateInitialTiles()));
  }, []);

  // Mélange les tuiles
  const shuffle = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const handleClick = (index) => {
    const emptyIndex = tiles.indexOf(0);
    const distance = Math.abs(index - emptyIndex);

    if (distance === 1 || distance === gridSize) {
      const newTiles = [...tiles];
      [newTiles[index], newTiles[emptyIndex]] = [
        newTiles[emptyIndex],
        newTiles[index],
      ];
      setTiles(newTiles);

      if (checkSolved(newTiles)) {
        setPuzzleSolved(true);
      }
    }
  };

  const checkSolved = (tilesToCheck) => {
    for (let i = 0; i < tilesToCheck.length - 1; i++) {
      if (tilesToCheck[i] !== i + 1) {
        return false;
      }
    }
    return true;
  };

  const reset = () => {
    setTiles(shuffle(generateInitialTiles()));
    setPuzzleSolved(false);
  };

  const autoSolve = () => {
    setTiles(solvedTiles);
    setPuzzleSolved(true);
  };

  return (
    <div className="sliding-puzzle">
      <div className="board" style={{ width: BOARD_SIZE, height: BOARD_SIZE }}>
        {tiles.map((tile, index) => (
          <Tile
            key={tile}
            index={index}
            gridSize={gridSize}
            tileNumber={tile}
            image={image}
            tileSize={TILE_SIZE}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <div className="controls">
        <button onClick={reset}>Recommencer</button>
        {!puzzleSolved && <button onClick={autoSolve}>Résoudre</button>}
        {puzzleSolved && (
          <div className="message">
            Félicitations, vous avez résolu le puzzle !
            <ButtonLink content='Retour' path='/découverte'/>
          </div>
        )}
      </div>
    </div>
  );
};

export default SlidingPuzzle;
