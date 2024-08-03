export interface iButtonSubmit{
  text:string
  type:"button" | "submit" | "reset"
  bgColorClass: string
}

export interface iButtonChange{
  text: string
  onClick?: Dispatch<SetStateAction<boolean>>
}

export interface iButtonMobile{
  text: string
  onClick: Dispatch<SetStateAction<boolean>>
  bgColorClass: string
}
