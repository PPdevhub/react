import React, { useState } from 'react';

const App = () => {
    const [inputNumber, setInputNumber] = useState('');
    const [isPalindrome, setIsPalindrome] = useState(null);

    const checkPalindrome = (num) => {
        const str = num.toString();
        return str === str.split('').reverse().join('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = checkPalindrome(inputNumber);
        setIsPalindrome(result);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Palindrome Checker</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={inputNumber}
                    onChange={(e) => setInputNumber(e.target.value)}
                    placeholder="Enter a number"
                    style={{ padding: '10px', width: '300px' }}
                />
                <button type="submit" style={{ padding: '10px' }}>Check</button>
            </form>
            {isPalindrome !== null && (
                <h2>
                    {inputNumber} is {isPalindrome ? '' : 'not '}a palindrome.
                </h2>
            )}
        </div>
    );
};

export default App;
