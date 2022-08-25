import React from "react";
import { createContext } from "react";
import { useGetPeople } from "../hooks/usePeople";
import { ChallengeContextProps, Context } from "../types/Challenge";

export const ChallengeContext = createContext<Context | null>(null)

export const DataProvider = (props: ChallengeContextProps) => {

  const { people, addPerson } = useGetPeople()

  return (
    <ChallengeContext.Provider
      value={{ people, addPerson }}
    >
      {props.children}
    </ChallengeContext.Provider>
  )
}