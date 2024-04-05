import React, { createContext, useContext, useState } from 'react';

const ContextooTema = createContext();

const TemaProvider = ({ children }) => {
  const [Tema, setTema] = useState('claro'); 
  
  const toggleTema = () => {
    setTema((prevTema) => (prevTema === 'claro' ? 'dark' : 'claro'));
  };

  return (
    <ContextoTema.Provider value={{ Tema, toggleTema }}>
      {children}
    </ContextoTema.Provider>
  );
};

const useTema = () => {
  const Contexto = useContext(TemaContexto);
  if (!Contexto) {
    throw new Error('useTema must be used within a TemaProvider');
  }
  return Contexto;
};

export { TemaProvider, useTema };
