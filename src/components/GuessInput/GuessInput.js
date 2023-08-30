import React from "react";

function GuessInput({ guesses, setGuesses, gameOver, limit, answer, setGameOver }) {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      className='guess-input-wrapper'
      onSubmit={(event) => {
        event.preventDefault();
        const nextGuesses = [...guesses, guess];
        setGuesses(nextGuesses);
        if (guesses.length === limit || guess === answer) {
          setGameOver(true);
        }
        setGuess("");
      }}
    >
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        type='text'
        id='guess-input'
        required
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
        pattern='[a-zA-Z]{5}'
        disabled={gameOver}
        placeholder='Enter 5 letters'
      />
    </form>
  );
}

export default GuessInput;
