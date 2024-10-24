import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [sum, setSum] = useState(null);

  const handleSum = () => {
        const numbers = input.split(',').map(num => parseFloat(num.trim()));
        const total = numbers.reduce((acc, curr) => acc + (isNaN(curr) ? 0 : curr), 0);
    setSum(total);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Sum of Numbers in an Array</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers separated by commas"
      />
      <button onClick={handleSum}>Calculate Sum</button>
      {sum !== null && (
        <h2>Sum: {sum}</h2>
      )}
    </div>
  );
}

export default App;
