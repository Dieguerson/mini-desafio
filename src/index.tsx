import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { Greeting } from './components/Greeting';
import { Formulario } from './routes/Formulario';
import { Personas } from './routes/Personas';

const rootElement = document.getElementById('root') as Element

const root = ReactDOM.createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/mini-desafio" element={<Greeting />} />
        <Route path="personas" element={<Personas />} />
        <Route path="formulario" element={<Formulario />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
