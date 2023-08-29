import React from "react";

function Guess({ range, children }) {
  return (
    <p className='guess'>
      {range(5).map((index) => (
        <span className={`cell ${children&& children[index].status}`} key={index}>
          {children && children[index].letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
