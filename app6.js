import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const checkPalindrome = () => {
    const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const isPalindrome = cleanedInput === cleanedInput.split('').reverse().join('');
    setResult(isPalindrome ? 'is a palindrome' : 'is not a palindrome');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Palindrome Checker</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a string"
      />
      <button onClick={checkPalindrome}>Check</button>
      {result && <p>The string "{input}" {result}.</p>}
    </div>
  );
}

export default App;
