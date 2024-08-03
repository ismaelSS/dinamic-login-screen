import { ButtonChange } from "@/components/buttons";
import { Dispatch, SetStateAction } from "react";

export default function ToRegister({onClick}: {onClick:() => void}){
  return(
    <div className="flex flex-col items-center self-center gap-[10px]">
      <p className="text-white text-xl font-semibold">Não possui uma conta?</p>
      <ButtonChange text='Registrar' onClick={() =>onClick()}/>
    </div>
  )
}
