import { iUserRegister } from "@/typings/users";
import { api } from "./api";
import { toast } from "react-toastify";

export const registerUser = async(data:iUserRegister) =>{
  const response = await api.post("users/", data)

  if(response.status == 201){
    toast.success("conta criada com sucesso")
    console.log(response);
  }else{
    toast.error('error')
    console.log(response);
  }

}
