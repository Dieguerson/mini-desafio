export type ChallengeContextProps = {
  children: React.ReactNode
}

export interface Persona {
  nombre: string,
  edad: number,
  carrera: string,
  hobbie: string
}

export interface Context {
  people: Persona[],
  addPerson: (person: Persona) => void
}