import React from 'react';

const App = () => {
    const isPrime = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    const primes = [];
    for (let i = 1; i <= 100; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Prime Numbers between 1 and 100</h1>
            <ul>
                {primes.map((prime) => (
                    <li key={prime}>{prime}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
