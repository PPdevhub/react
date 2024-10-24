import React from 'react';

function App() {
  // Create an array of numbers from 1 to 100
  const numbers = Array.from({ length: 100 }, (_, index) => index + 1);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Numbers from 1 to 100</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
