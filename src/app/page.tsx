'use client';

import ToLogin from '@/components/change/toLogin';
import ToRegister from '@/components/change/toRegister';
import LoginForm from '@/components/forms/login';
import RegisterForm from '@/components/forms/register';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ButtonMobile } from '@/components/buttons';


export default function Home() {
  const [isLogin, setIsLogin] = useState(true)

  function invertIsLogin() {
    setIsLogin(!isLogin)
  }
  function toLogin(){
    setIsLogin(true)
  }
  function toRegister(){
    setIsLogin(false)
  }

  return (
    <>
      <motion.div
        className={`w-screen h-screen flex justify-center items-center bg-black`}
        animate={{
          background: isLogin ? '#B91C1C' : '#F59E0B',
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut'
        }}
        >
        <div className='sm:hidden bg-0 w-[98%] h-[99%] p-[10px] flex flex-col justify-center'>
          <div>
            <ButtonMobile text='login' onClick={() => toLogin()} bgColorClass='bg-red-500'/>
            <ButtonMobile text='Registrar' onClick={() => toRegister()} bgColorClass='bg-amber-500'/>
          </div>
          {
            isLogin ?
              <LoginForm />
              :
              <RegisterForm />
          }
        </div>

        <div className='hidden sm:flex bg-0 justify-between w-[70%] max-w-[1200px] h-[400PX] shadow-1 px-[40px]'>
          <div className='w-[60%] flex justify-center'>
            {
              !isLogin &&
              <ToLogin onClick={() => invertIsLogin()} />
            }
          </div>
          <motion.div
            className={`h-fit w-[28%] mt-[-40px] absolute max-w-[400px]`}
            transition={{
              duration: 1,
              ease: 'easeOut',
              type:'Inertia',
            }}
            animate={{
              left: isLogin ? 'calc(15% + 40px)' : 'calc(57% - 40px)',
            }}
            >
            {
              isLogin ?
                <LoginForm />
                :
                <RegisterForm />
            }
          </motion.div>
          <div className='w-[60%] flex justify-center'>
            {
              isLogin &&
              <ToRegister onClick={() => invertIsLogin()} />
            }
          </div>
        </div>
      </motion.div>
    </>
  )
}
