'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import FormFull from '@/components/forms/form';

export default function LoginPage() {
  return (
    <main className='max-w-[1440px] h-screen flex flex-col justify-center items-center mx-auto max-sm:w-[375px]'>
      <section className='flex flex-col justify-center items-center gap-[3.125rem] p-[50px] border border-[blue] rounded-[15px]'>
        <h1 className='text-blue-600 font-bold text-xl'>Usuário do Sistema</h1>
        <FontAwesomeIcon icon={faUserCheck} className='text-[75px] text-[green]' />
        <FormFull title='Entrar' value='Entrar' page='Login' />
      </section>
    </main>
  );
};