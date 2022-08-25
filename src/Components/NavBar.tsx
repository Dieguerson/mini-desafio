import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react'
import '../styles/NavBar.scss'

export function NavBar () {
  
  return (
    <>
      <header>
        <nav className='navBar'>
          <ul className='menu'>
            <li>
              <NavLink to='/personas' className={({isActive}) => isActive ? 'route-active' : 'route'}>
                <Icon icon='ion:person-outline' className='icon'/>
                Personas
              </NavLink>
            </li>
            <li>
              <NavLink to='/mini-desafio' className={({isActive}) => isActive ? 'route-active' : 'route'}>
                <Icon icon='ion:home-outline' className='icon'/>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/formulario' className={({isActive}) => isActive ? 'route-active' : 'route'}>
                <Icon icon='ion:person-add-outline' className='icon'/>
                <span>Formulario</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}