import { Luckiest_Guy } from "next/font/google";
import { Header } from "./components/Header";
import { WeightForm } from "./components/WeightForm";

const luckiestGuy = Luckiest_Guy({ subsets: ["latin"], weight: ["400"] });

export default function Home() {


  return (
    <div className="w-full font-bold">

      <Header text="VOCê GANHOU UM TESTE GRATUITO" />

      <div className="flex flex-col justify-center items-center my-5 px-5">
        <p className={`text-md text-center md:text-3xl tracking-wide ${luckiestGuy.className}`}>Responda as questões abaixo e veja quantos <span className="text-emerald-500">Kg</span> pode perder com <span className="text-white bg-emerald-500">ozempicNatural</span></p>

        <div className="md:w-[50rem] flex flex-col justify-center items-center gap-3 py-4 bg-emerald-600 rounded-lg my-8">
          <p className="text-white text-center md:text-xl drop-shadow-2xl">Digite informações precisas para fazer o cálculo:</p>
          <WeightForm />
        </div>
      </div>
    </div>
  );
}
