import React, { useContext } from "react";
import '../styles/Personas.scss'
import { ChallengeContext } from "../context/challengeContext";
import { Context } from "../types/Challenge";

const Personas = () => {

  const { people } = useContext(ChallengeContext) as Context

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Carrera</th>
          <th>Hobbie</th>
        </tr>
      </thead>
      <tbody>
        {
          people.map((person, i) => {
            return (
              <tr key={i}>
                <td>{person.nombre}</td>
                <td>{person.edad}</td>
                <td>{person.carrera}</td>
                <td>{person.hobbie}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export { Personas }