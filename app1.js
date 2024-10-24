import React, { useState } from "react";

function EvenOddChecker() {
  const [num, setNum] = useState('');
  const [result, setResult] = useState('');

  const handleCheck = () => {
    const num1 = parseInt(num);
        if (isNaN(num1)) {               //
      setResult('Please enter a valid number');
      return;
    }

    if (num1 % 2 === 0) {
      setResult(`${num1} is an even number.`);
    } else {
      setResult(`${num1} is an odd number.`);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={handleCheck}>Check Even or Odd</button>
      <p>{result}</p>
    </div>
  );
}

export default EvenOddChecker;

