import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function GuessResults({ guesses, answer, limit }) {
  return (
    <div className='guess-results'>
      {range(limit).map((index) => (
        <Guess key={index} range={range}>
          {checkGuess(guesses[index], answer)}
        </Guess>
      ))}
    </div>
  );
}

export default GuessResults;
