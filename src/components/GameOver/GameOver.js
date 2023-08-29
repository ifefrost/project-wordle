import React from "react";

function GameOver({ guesses, answer, limit, setGameOver }) {
  if (guesses[guesses.length - 1] === answer) {
    setGameOver(true);
    return (
      <div className='happy banner'>
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{guesses.length} guesses</strong>.
        </p>
      </div>
    );
  }
  if (guesses.length === limit) {
    setGameOver(true);
    return (
      <div className='sad banner'>
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
}

export default GameOver;
