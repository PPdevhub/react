import React, { useState } from 'react';

function App() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);

  // Recursive function to calculate factorial
  const factorial = (n) => {
    if (n < 0) return 'Invalid input'; // Factorial of negative numbers doesn't exist
    if (n === 0 || n === 1) return 1; // Base case
    return n * factorial(n - 1); // Recursive case
  };

  const handleCalculate = () => {
    const num = parseInt(number);
    if (!isNaN(num)) {
      setResult(factorial(num));
    } else {
      setResult('Please enter a valid number');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Factorial Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={handleCalculate}>Calculate Factorial</button>
      {result !== null && (
        <h2>Factorial: {result}</h2>
      )}
    </div>
  );
}

export default App;
