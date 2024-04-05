import React from 'react';
import Contador from '../components/Contador';
import ComponenteButton from '../components/ComponenteButton';
import ComponenteInput from '../components/ComponenteInput';
import MudaTema from '../components/MudaTema';

const Home = () => {
  return (
    <div>
      <center><h2>Página Inicial</h2></center>
      <Contador />
      <ComponenteButton />
      <ComponenteInput />
      <MudaTema />
    </div>
  );
};

export default Home;
