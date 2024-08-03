import { ButtonChange } from "@/components/buttons";
import { Dispatch, SetStateAction } from "react";

export default function ToLogin({onClick}: {onClick:() => void}){
  return(
    <div className="flex flex-col items-center self-center gap-[10px]">
      <p className="text-white text-xl font-semibold">Já possui uma conta?</p>
      <ButtonChange  text='Logar' onClick={() =>onClick()}/>
    </div>
  )
}
