import { useEffect, useState } from 'react'
import { Persona } from '../types/Challenge'

export const usePeople = () => {

  const [people, setPeople] = useState<Persona[]>([])

  const getPeople = () => {
    setPeople(require('../database/people.json'))
  }

  const addPerson = (person: Persona) => {
    setPeople([...people, person])
  }

  useEffect(() => {
    getPeople()
  }, [])

  return {
    people,
    addPerson
  }
}