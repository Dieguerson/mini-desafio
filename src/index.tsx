import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from './App';
import { Greeting } from './Components/Greeting';
import { Formulario } from './routes/Formulario';
import { FourOFour } from './routes/FourOFour';
import { Personas } from './routes/Personas';

const rootElement = document.getElementById('root') as Element

const root = ReactDOM.createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to='/mini-desafio' replace />} />
      <Route path='/' element={<App />}>
        <Route path='mini-desafio' element={<Greeting />} />
        <Route path='personas' element={<Personas />} />
        <Route path='formulario' element={<Formulario />} />
        <Route path='*' element={<FourOFour />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
