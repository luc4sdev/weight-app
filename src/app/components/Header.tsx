'use client'

import { useWeight } from "@/contexts/WeightContext"
import { Luckiest_Guy } from "next/font/google";

interface HeaderProps {
    text?: string
}


const luckiestGuy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });

export function Header({ text }: HeaderProps) {
    const { name, days, desiredWeight } = useWeight()
    return (
        <div className={`w-full flex justify-center items-center bg-zinc-950 h-28 ${luckiestGuy.className}`}>
            {text ? (
                <h1 className="text-white text-center text-lg md:text-5xl tracking-wider">{text}</h1>
            )
                :
                (
                    <h1 className="text-white text-center text-md md:text-4xl tracking-wider">
                        <span className="text-emerald-400">{name}</span>,Você pode alcançar <span className="text-emerald-400">{desiredWeight}kg</span> em <span className="text-emerald-400">{days} dias</span> com o <span className="text-emerald-400">OZEMPICNATURAL</span>
                    </h1>
                )}
        </div>
    )
}