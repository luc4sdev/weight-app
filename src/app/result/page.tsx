'use client'

import { CircleArrowDown, CirclePlay, RotateCcw } from "lucide-react";
import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { useState } from "react";

export default function Result() {

    const [videoFinished, setVideoFinished] = useState(false)

    function handleVideoFinished() {
        setVideoFinished(!videoFinished)
    }

    return (
        <div className="w-full min-h-screen bg-emerald-800 font-bold">
            <Header />

            <div className="flex flex-col justify-center items-center gap-14">

                <div className="w-full flex justify-center items-center gap-3 py-3 bg-emerald-400 text-white">
                    <CircleArrowDown />
                    <p className="text-xs text-center md:text-lg drop-shadow-xl">Assista o vídeo abaixo e descubra como</p>
                    <CircleArrowDown />
                </div>

                <div className={`relative w-11/12 lg:w-4/6 h-[25rem] md:h-[40rem] flex flex-col justify-center items-center gap-10 text-white ${videoFinished ? 'bg-red-500  shadow-md shadow-emerald-300' : 'bg-transparent'}`}>
                    {videoFinished ? (
                        <>
                            <div className="absolute top-3 left-3 bg-zinc-900/50 rounded-lg p-2">
                                <span className="text-white/50">1.00</span>
                            </div>
                            <p className="text-lg md:text-4xl text-center">Você já começou a assistir esse vídeo</p>

                            <div className="group flex justify-center items-center gap-8 px-3 lg:px-0 ">
                                <div onClick={handleVideoFinished} className="flex justify-center items-center text-center gap-3 cursor-pointer hover:text-zinc-300">
                                    <CirclePlay className="md:w-14 md:h-14" />
                                    <span className="text-sm md:text:md">Continuar assistindo?</span>
                                </div>

                                <div onClick={handleVideoFinished} className="flex justify-center items-center text-center gap-3 cursor-pointer hover:text-zinc-300">
                                    <RotateCcw className="md:w-14 md:h-14" />
                                    <span className="text-sm md:text:md">Assistir do início?</span>
                                </div>
                            </div>
                        </>
                    )
                        :
                        (
                            <Video videoFinished={videoFinished} handleVideoFinished={handleVideoFinished} />
                        )}
                </div>
            </div>
        </div>
    )
}