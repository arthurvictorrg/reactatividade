import React from 'react';
import { useTheme } from './ContextoTema';

const MudaTema = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default MudaTema;
