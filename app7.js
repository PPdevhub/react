import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [reversed, setReversed] = useState('');

  const reverseNumber = () => {
    const reversedInput = input.split('').reverse().join('');
    setReversed(reversedInput);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Number Reverser</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={reverseNumber}>Reverse</button>
      {reversed && <p>Reversed: {reversed}</p>}
    </div>
  );
}

export default App;
