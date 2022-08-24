import React from 'react'
import '../styles/NavBar.scss'

function NavBar () {
  return (
    <>
      <header>
        <nav className='navBar'>
          <ul className='menu'>
            <li className='route'>Personas</li>
            <li className='route'>Formulario</li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default NavBar