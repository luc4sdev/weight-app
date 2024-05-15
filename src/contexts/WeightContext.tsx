'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

interface WeightContext {
    name: string
    days: number
    desiredWeight: string
    setName: (name: string) => void
    setDays: (days: number) => void
    setDesiredWeight: (desiredWeight: string) => void

}

interface WeightProviderProps {
    children: ReactNode | ReactNode[] | JSX.Element | JSX.Element[]
}

const WeightContext = createContext({} as WeightContext);


export function WeightProvider({ children }: WeightProviderProps) {
    const [name, setName] = useState('');
    const [days, setDays] = useState(0);
    const [desiredWeight, setDesiredWeight] = useState('');

    useEffect(() => {
        setName(localStorage.getItem("name")!)
        setDays(Number(localStorage.getItem("days"))!)
        setDesiredWeight(localStorage.getItem("desiredWeight")!)
    }, [])

    return (
        <WeightContext.Provider value={{ name, setName, days, setDays, desiredWeight, setDesiredWeight }}>
            {children}
        </WeightContext.Provider>
    );
}


export function useWeight() {
    return useContext(WeightContext);
}
