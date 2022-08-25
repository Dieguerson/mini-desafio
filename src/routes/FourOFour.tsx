import React from 'react';
import '../styles/404.scss'

export const FourOFour = () => {

  return (
    <section className='fourOFour'>
      <img className='image' src={require('../assets/404.png')} alt='error page' />
      <h1 className='error'>Ups! Acá no hay nada.</h1>
    </section>
  )
}