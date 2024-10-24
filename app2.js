import React, { useState } from 'react';

function App() {
  const [numbers, setNumbers] = useState({ num1: '', num2: '', num3: '' });
  const [largest, setLargest] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNumbers({ ...numbers, [name]: value });
  };

  const findLargest = () => {
    const { num1, num2, num3 } = numbers;
    const n1 = Number(num1);
    const n2 = Number(num2);
    const n3 = Number(num3);

    if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3)) {
      setLargest(Math.max(n1, n2, n3));
    } else {
      setLargest('Please enter valid numbers');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Find the Largest of Three Numbers</h1>
      <input
        type="number"
        name="num1"
        value={numbers.num1}
        onChange={handleChange}
        placeholder="First number"
      />
      <input
        type="number"
        name="num2"
        value={numbers.num2}
        onChange={handleChange}
        placeholder="Second number"
      />
      <input
        type="number"
        name="num3"
        value={numbers.num3}
        onChange={handleChange}
        placeholder="Third number"
      />
      <button onClick={findLargest}>Find Largest</button>
      <h2>{largest}</h2>
    </div>
  );
}

export default App;
