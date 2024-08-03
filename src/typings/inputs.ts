import {UseFormRegister} from 'react-hook-form'

export interface iInputComponent{
  label:string
  type: string
  focusColorClass?:string
  error?:string
  register: Function
  registerName:string
}
