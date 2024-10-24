import React, { useState } from 'react';

const App = () => {
    const [inputString, setInputString] = useState('');
    const [frequency, setFrequency] = useState({});

    const countFrequency = (str) => {
        const freq = {};
        for (const char of str) {
            freq[char] = (freq[char] || 0) + 1;
        }
        setFrequency(freq);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        countFrequency(inputString);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Character Frequency Counter</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputString}
                    onChange={(e) => setInputString(e.target.value)}
                    placeholder="Enter a string"
                    style={{ padding: '10px', width: '300px' }}
                />
                <button type="submit" style={{ padding: '10px' }}>Count</button>
            </form>
            <h2>Character Frequencies:</h2>
            <ul>
                {Object.entries(frequency).map(([char, count]) => (
                    <li key={char}>{`${char}: ${count}`}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
