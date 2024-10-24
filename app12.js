import React, { useState } from 'react';

const App = () => {
    const [inputArray, setInputArray] = useState('');
    const [largestElement, setLargestElement] = useState(null);

    const findLargestElement = (array) => {
        return Math.max(...array);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const array = inputArray.split(',').map(Number);
        const result = findLargestElement(array);
        setLargestElement(result);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Largest Element Finder</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputArray}
                    onChange={(e) => setInputArray(e.target.value)}
                    placeholder="Enter numbers separated by commas"
                    style={{ padding: '10px', width: '300px' }}
                />
                <button type="submit" style={{ padding: '10px' }}>Find Largest</button>
            </form>
            {largestElement !== null && (
                <h2>The largest element is: {largestElement}</h2>
            )}
        </div>
    );
};

export default App;
