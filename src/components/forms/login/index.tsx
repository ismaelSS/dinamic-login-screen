import { useEffect, useState } from "react";
import { ButtonSubmit } from "../../buttons";
import InputField from "../../inputField";
import { motion, useAnimation } from 'framer-motion';
import { zodResolver } from "@hookform/resolvers/zod";
import { tUserLoginData, userLoginSchema } from "@/schemas/users.schemas";
import { SubmitHandler, useForm } from "react-hook-form";
import { iUserLogin } from "@/typings/users";



export default function LoginForm() {
  const controls = useAnimation();
  const animateItems = async () => {
    await controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
  };

  useEffect(() => {
    animateItems();
  }, []);


  const { register, handleSubmit, formState: { errors } } = useForm<tUserLoginData>({
    shouldUnregister: false,
    resolver: zodResolver(userLoginSchema)
  });

  // const onSubmit: SubmitHandler<iUserLogin> = data => {registerUser(data)};
  const onSubmit: SubmitHandler<iUserLogin> = data => { console.log(data) };

  return (
    <motion.form
      onSubmit={() => console.log('formulario submetido')}
      className="blur-none px-[30px] py-[15px] w-full h-[480px] bg-white flex flex-col items-center gap-4 sm:shadow-1"
      initial={{ opacity: 0, y: 0 }}
      animate={controls}
    >

      <h3 className='text-2xl my-[20px]'>Login</h3>
      <InputField type='text' label='E-mail ou Nome' focusColorClass='focus:border-red-700' error={errors.identificator?.message} registerName="identificator" register={register} />
      <InputField type='password' label='Senha' focusColorClass='focus:border-red-700' error={errors.password?.message} registerName="password" register={register} />
      <ButtonSubmit type="submit" bgColorClass='bg-red-700' text='Login' />
    </motion.form>
  )
}
