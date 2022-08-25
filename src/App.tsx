import React from 'react';
import './styles/App.scss'
import { NavBar } from './Components/NavBar'
import { Outlet } from 'react-router-dom';
import { DataProvider } from './context/challengeContext'

function App () {
  return (
    <>
      <main>
        <DataProvider>
          <NavBar />
          <Outlet />
        </DataProvider>
      </main>
    </>
  );
}

export default App;
