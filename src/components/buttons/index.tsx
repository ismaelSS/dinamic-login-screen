import { iButtonChange, iButtonMobile, iButtonSubmit } from "@/typings/buttons";

export function ButtonSubmit({text, type, bgColorClass}:iButtonSubmit){
  return(
    <button type={type} className={`${bgColorClass} px-[30px] py-[10px] w-fit rounded-[40px] text-white`}>
      {text}
    </button>
  )
}

export function ButtonChange({text, onClick}: iButtonChange){
  return(
    <button onClick={() => onClick()} type='button' className={`border-2 px-[30px] py-[10px] w-fit rounded-[40px] text-white`}>
      {text}
    </button>
  )
}

export function ButtonMobile({text, onClick, bgColorClass}: iButtonMobile){
  return(
    <button onClick={() => onClick()} type='button' className={`${bgColorClass} text-white w-1/2 h-[40px] text-lg font-semibold`}>
    {text}
  </button>
  )
}
