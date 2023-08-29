import React from "react";
import KeyButton from "../KeyButton";
import { KEYBOARD_ROWS as letter_rows } from "../../constants";
import { checkGuess } from "../../game-helpers";

function KeyBoard({ guesses, setGuesses, KEYBOARD, answer }) {
  return (
    <div>
      {letter_rows.map((row, index) => (
        <div className='keyboard' key={index}>
          <KeyButton>{checkGuess(row, answer)}</KeyButton>
        </div>
      ))}
    </div>
  );
}

export default KeyBoard;
