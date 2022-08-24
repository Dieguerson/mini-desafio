import React from 'react';
import './styles/App.scss'
import NavBar from './Components/NavBar'
import { Greeting } from './Components/Greeting';
import { Personas } from './routes/Personas';
import { Formulario } from './routes/Formulario';

function App () {
  return (
    <>
      <NavBar />
      <Greeting />
      <Personas />
      <Formulario />
    </>
  );
}

export default App;
