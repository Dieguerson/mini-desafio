import React from 'react';
import '../styles/Greeting.scss'

export const Greeting = () => {
  return (
    <section className='welcome'>
      <img className='image' src={require('../assets/welcome.png')} alt='greeting' />
      <h1 className='greeting'>Bienvenides!</h1>
    </section>
  )
}