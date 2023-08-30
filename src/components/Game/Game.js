import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED as limit } from "../../constants";
// import KeyBoard from "../KeyBoard";
import GameOver from "../GameOver";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  
  const [gameOver, setGameOver] = React.useState(false);

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} limit={limit} />
      <GuessInput
        guesses={guesses}
        setGuesses={setGuesses}
        gameOver={gameOver}
        limit={limit}
        answer={answer}
        setGameOver={setGameOver}
      />
      {/* <KeyBoard guesses={guesses} setGuesses={setGuesses} answer={answer} /> */}
      
      {setGameOver && <GameOver
        guesses={guesses}
        answer={answer}
        limit={limit}
      />}
    </>
  );
}

export default Game;
