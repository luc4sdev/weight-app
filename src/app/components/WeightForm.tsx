'use client'
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { InputControl, InputRoot } from "./Form/Input";
import { z } from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { calculateDaysToDesiredWeight } from "@/utils/calculateDaysToDesiredWeight";
import { useWeight } from "@/contexts/WeightContext";
import { useRouter } from "next/navigation";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });


const clientSchema = z.object({
    name: z.string().min(1, "Insira seu nome."),
    age: z.string().min(1, "Insira a sua idade."),
    height: z.string().min(1, "Insira sua altura."),
    currentweight: z.string().min(1, "Insira seu peso atual."),
    desiredweight: z.string().min(1, "Insira o peso desejado."),
}).refine((data) => parseFloat(data.currentweight) >= parseFloat(data.desiredweight), {
    message: 'O peso atual deve ser maior que o peso desejado.',
    path: ['currentweight']
});

export type ClientSchemaType = z.infer<typeof clientSchema>

export function WeightForm() {

    const { setName, setDays, setDesiredWeight } = useWeight()
    const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm<ClientSchemaType>({
        resolver: zodResolver(clientSchema),

    })

    const [activityLevel, setActivityLevel] = useState('none');

    const [gender, setGender] = useState('');

    const handleGenderChange = (e: any) => {
        setGender(e.target.value);
    };

    const handleActivityChange = (e: any) => {
        setActivityLevel(e.target.value);
    };

    function submitForm(data: ClientSchemaType) {
        try {
            if (gender.length === 0) {
                throw new Error('No gender selected')
            }
            const days = calculateDaysToDesiredWeight(data)
            setName(data.name)
            setDays(days)
            setDesiredWeight(data.desiredweight)
            localStorage.setItem("name", data.name)
            localStorage.setItem("desiredWeight", data.desiredweight)
            localStorage.setItem("days", String(days))
            router.push('/result')


        } catch (err) {
            console.error(err)
            window.alert('Selecione o gênero!')
        }
    }

    return (
        <form noValidate onSubmit={handleSubmit(submitForm)} className="w-3/4 flex flex-col justify-center items-center gap-3 text-white">

            <div className={`w-full ${inter.className} font-semibold`}>
                <InputRoot>
                    <InputControl id="name" type="text" placeholder='Nome' {...register('name')} />
                </InputRoot>
                <p className="text-sm text-red-600 font-semibold">{errors.name?.message}</p>
            </div>

            <div className={`w-full ${inter.className} font-semibold`}>
                <InputRoot>
                    <InputControl id="age" type="text" placeholder='Idade'  {...register('age')} />
                </InputRoot>
                <p className="text-sm text-red-600 font-semibold">{errors.age?.message}</p>
            </div>

            <div className={`w-full ${inter.className} font-semibold`}>
                <InputRoot>
                    <InputControl id="height" type="text" placeholder='Altura (em cm)'  {...register('height')} />
                </InputRoot>
                <p className="text-sm text-red-600 font-semibold">{errors.height?.message}</p>
            </div>

            <div className={`w-full ${inter.className} font-semibold`}>
                <InputRoot>
                    <InputControl id="current-weight" type="text" placeholder='Peso atual (em kg)'  {...register('currentweight')} />
                </InputRoot>
                <p className="text-sm text-red-600 font-semibold">{errors.currentweight?.message}</p>
            </div>

            <div className={`w-full ${inter.className} font-semibold`}>
                <InputRoot>
                    <InputControl id="desired-weight" type="text" placeholder='Peso desejado (em kg)'  {...register('desiredweight')} />
                </InputRoot>
                <p className="text-sm text-red-600 font-semibold">{errors.desiredweight?.message}</p>
            </div>

            <p>Qual é o seu gênero?</p>

            <div className="flex justify-center items-center gap-6">
                <div className="flex justify-center items-center gap-2">
                    <input
                        type="radio"
                        id="genderMale"
                        name="gender"
                        value="male"
                        checked={gender === 'male'}
                        onChange={handleGenderChange}
                    />
                    <label htmlFor="genderMale">Masculino</label>
                </div>

                <div className="flex justify-center items-center gap-2">
                    <input
                        type="radio"
                        id="genderFemale"
                        name="gender"
                        value="female"
                        checked={gender === 'female'}
                        onChange={handleGenderChange}
                    />
                    <label htmlFor="genderFemale">Feminino</label>
                </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center gap-2">
                <p>Qual é o seu nível de atividade física diária?</p>
                <div className={`w-full relative ${inter.className} font-semibold`}>
                    <select
                        name="activityLevel"
                        id="activityLevel"
                        value={activityLevel}
                        onChange={handleActivityChange}
                        className="appearance-none w-full text-zinc-500 rounded-md py-1 px-2 pr-8 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        <option defaultValue="none" className="text-zinc-950">Nenhuma atividade</option>
                        <option value="sedentary" className="text-zinc-950">Sedentário</option>
                        <option value="lightlyActive" className="text-zinc-950">Levemente Ativo</option>
                        <option value="moderatelyActive" className="text-zinc-950">Moderadamente Ativo</option>
                        <option value="veryActive" className="text-zinc-950">Muito Ativo</option>
                        <option value="extraActive" className="text-zinc-950">Extremamente Ativo</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <ChevronDown />
                    </div>
                </div>
            </div>

            <button type="submit" className="tracking-wide text-sm md:text-lg bg-emerald-800 py-3 px-10 rounded-md shadow-xl border-2 border-blue-500 border-solid relative overflow-hidden">
                <span className="absolute inset-0 border-2 border-white -m-px rounded-md"></span>
                REALIZAR CÁLCULO AGORA!
            </button>

            <p onClick={handleSubmit(submitForm)} className="w-2/3 md:w-[33rem] text-white text-center underline cursor-pointer">Clique aqui para descobrir em quanto tempo chegará no seu peso ideal com OzempicNatural</p>
        </form>
    )
}