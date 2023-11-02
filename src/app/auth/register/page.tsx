'use client';

import ButtonSolid from '@/components/Button/ButtonSolid';
import InputEmail from '@/components/Input/Email';
import InputPassword from '@/components/Input/Password';
import InputText from '@/components/Input/Text';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState<any>({
    redirect: false,
    type: 'register'
  });

  function changeForm(e: any) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function submitForm(e: any) {
    e && e.preventDefault();
    signIn('credentials', form).then((data: any) => {
      if (data.ok) {
        return router.replace('/');
      } else {
      }
    });
  }

  return (
    <div className='min-h-screen w-full overflow-y-auto bg-[#FAFAFB] relative'>
      <div className='w-auto h-auto relative space-y-[50vh]'>
        <div className='bg-white w-full absolute h-[50vh] skew-y-[3deg] rounded-b-[4rem] -top-[2.5rem]' />
      </div>
      <div className='z-8 mt-10 absolute w-full h-full items-center flex flex-col '>
        <div className='w-auto h-auto md:w-[560px] md:h-[597px] space-y-10 p-5 md:p-12 rounded-3xl bg-white'>
          <div className='space-y-5 md:space-y-10'>
            <div className='text-5xl md:text-6xl font-bold w-full h-auto md:h-[20%] text-[#44444F]  flex justify-center items-center'>
              Register
            </div>
            <div className='text-sm md:text-normal text-center text-[#92929D] px-2 md:px-0'>
              Let’s Sign up first for enter into Square Website. Uh She Up!
            </div>
          </div>
          <div className='w-full h-full flex flex-col justify-between '>
            <div className='flex flex-col space-y-4'>
              <InputText name='name' change={changeForm} label={'First Name'} />
              <InputEmail change={changeForm} name='email' label={'Email'} />
              <InputPassword
                change={changeForm}
                name='password'
                label={'Password'}
              />
              <div className='w-full md:flex space-x-0 md:space-x-4 space-y-2 md:space-y-0'>
                <Link href={`/auth/signin`} className='w-full md:w-[30%] '>
                  <ButtonSolid
                    className={'w-full bg-primary text-[#696974] px-4 py-3'}
                    title='Login'
                  />
                </Link>
                <ButtonSolid
                  click={submitForm}
                  className={' w-full md:w-[70%] py-3 bg-primary'}
                  title='Register'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
