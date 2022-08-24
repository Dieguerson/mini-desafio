import React from "react";
import '../styles/Greeting.scss'

const Greeting = () => {
  return (
    <section className="welcome">
      <img className='image' src={require("../assets/welcome.png")} alt="greeting" />
      <h1 className='greeting'>Welcome!</h1>
    </section>
  )
}

export { Greeting }