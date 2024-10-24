import React, { useState } from 'react';

const VowelCounter = () => {
  const [inputString, setInputString] = useState('');
  const [vowelCount, setVowelCount] = useState(0);

  const handleInputChange = (event) => {
    const input = event.target.value;
    setInputString(input);
    countVowels(input);
  };

  const countVowels = (str) => {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    }
    setVowelCount(count);
  };

  return (
    <div>
      <input type="text" value={inputString} onChange={handleInputChange} />
      <p>Vowel count: {vowelCount}</p>
    </div>
  );
};

export default VowelCounter;