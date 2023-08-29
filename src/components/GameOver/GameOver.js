import React from "react";

function GameOver({ guesses, answer, limit, setGameOver }) {
  React.useEffect(() => {
    if (guesses.length === limit || guesses[guesses.length - 1] === answer) {
      setGameOver(true);
    }
  }, [guesses, answer, limit, setGameOver]);
  
  if (guesses[guesses.length - 1] === answer) {
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
