import React, { useState } from 'react';

const ComponenteInput = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};

export default ComponenteInput;