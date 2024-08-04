import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ButtonSubmit } from "../../buttons";
import InputField from "../../inputField";
import { zodResolver } from "@hookform/resolvers/zod";
import { tUserRegisterData, userRegisterSchema } from '@/schemas/users.schemas';
import { SubmitHandler, useForm } from "react-hook-form";
import { iUserRegister } from '@/typings/users';

export default function RegisterForm() {
  const controls = useAnimation();

  useEffect(() => {
    animateItems();
  }, []);

  const { register, handleSubmit, formState: { errors } } = useForm<tUserRegisterData>({
    shouldUnregister: false,
    resolver: zodResolver(userRegisterSchema)
  });

  const animateItems = async () => {
    await controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
  };

  // const onSubmit: SubmitHandler<iUserRegister> = data => {registerUser(data)};
  const onSubmit: SubmitHandler<iUserRegister> = data => { console.log(data) };

  // console.log(errors)

  return (
    <motion.form
      onSubmit={() => console.log('formulário submetido')}
      className="px-[30px] py-[15px] w-full min-h-[480px] bg-white  flex flex-col items-center gap-4 sm:shadow-1"
      initial={{ opacity: 0, y: 0 }}
      animate={controls}
    >
      <h3 className='text-2xl my-[20px]'>Registrar</h3>
      <InputField type='text' label='Nome de usuário' focusColorClass='focus:border-amber-500' error={errors.name?.message} registerName='name' register={register} />
      <InputField type='email' label='E-mail' focusColorClass='focus:border-amber-500' error={errors.email?.message} registerName='email' register={register} />
      <InputField type='password' label='Senha' focusColorClass='focus:border-amber-500' error={errors.password?.message} registerName='password' register={register} />
      <InputField type='password' label='confirme sua Senha' focusColorClass='focus:border-amber-500' error={errors.passwordConfirm?.message} registerName='passwordConfirm' register={register} />
      <ButtonSubmit type="submit" bgColorClass='bg-amber-500' text='Registrar' />
    </motion.form>
  )
}
