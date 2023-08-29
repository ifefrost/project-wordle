import React from "react";

function KeyButton({ children }) {
  return (
    <p className='keyboard-row'>
      {children.map((letter) => (
        <span className={`key `}
          key={letter.letter}
          if 
        >
          {letter.letter}
        </span>
      ))}
    </p>
  );
}

export default KeyButton;
