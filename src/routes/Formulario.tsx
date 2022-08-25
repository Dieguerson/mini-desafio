import React, { useContext, useEffect, useState } from "react";
import { ChallengeContext } from "../context/challengeContext";
import { Context, Persona } from "../types/Challenge";
import { NavLink } from 'react-router-dom'
import '../styles/Formulario.scss'

const Formulario = () => {

  const { addPerson } = useContext(ChallengeContext) as Context

  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<number | string>('')
  const [career, setCareer] = useState<string>('')
  const [hobbie, setHobbie] = useState<string>('')
  const [created, setCreated] = useState(false)
  const [person, setPerson] = useState<Persona>({nombre: '', edad: 0, carrera: '', hobbie: ''})

  const createPerson = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setPerson({
      nombre: name,
      edad: age as number,
      carrera: career,
      hobbie
    })
    setCreated(true)
  }

  const displayPerson = () => {
    console.log('Persona añadida:', person)
    return (
      <section className="display">
        <h2>{person.nombre} ha sido añadide al grupo! Podés ir a verlo a <NavLink to='/personas' className={({isActive}) => isActive ? 'route-active' : 'route'}>Personas</NavLink>!</h2>
        <ul>
          <li><b>Nombre:</b> {person.nombre}</li>
          <li><b>Edad:</b> {person.edad}</li>
          <li><b>Carrera:</b> {person.carrera}</li>
          <li><b>Hobbie:</b> {person.hobbie}</li>
        </ul>
      </section>
    )
  }

  useEffect(() => {
    if (created) addPerson(person)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [person])
  
  return (
    <>
      <form className='form' onSubmit={(e) => createPerson(e)}>
        <label>
          <p>Nombre</p>
          <input type="text" value={name} placeholder='Diega' onInput={(e: React.ChangeEvent<HTMLInputElement>) => {setName(e.target.value)}} />
        </label>
        <label>
          <p>Edad</p>
          <input type="number" value={String(age)} placeholder='31' onInput={(e: React.ChangeEvent<HTMLInputElement>) => {setAge(Number(e.target.value))}} />
        </label>
        <label>
          <p>Carrera</p>
          <input type="text" value={career} placeholder='Programador' onInput={(e: React.ChangeEvent<HTMLInputElement>) => {setCareer(e.target.value)}} />
        </label>
        <label>
          <p>Hobbie</p>
          <input type="text" value={hobbie} placeholder='Leer' onInput={(e: React.ChangeEvent<HTMLInputElement>) => {setHobbie(e.target.value)}} />
        </label>
        <input className='submit' type='submit' value='Enviar'/>
      </form>
      {created ? displayPerson() : null}
    </>
  )
}

export { Formulario }