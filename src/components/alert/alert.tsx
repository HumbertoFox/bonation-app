'use client';
import { useState } from "react";
import { AlertMessageState } from "@/app/types/types";
export default function AlertMessage({ message, Error, page, clickDonation, onClose }: AlertMessageState) {
    const [isClosing, setIsClosing] = useState<boolean>(false);
    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose && onClose();
        }, 400);
    };
    return (
        <div aria-live='assertive' className='fixed w-full h-full flex justify-center items-center top-0 left-0 bg-alert-blue z-10 duration-[400ms] backdrop-blur-sm'>
            <section role='alert' className={`flex flex-col gap-[5px] text-center bg-white p-5 rounded-[15px] shadow-3xm ${isClosing ? 'animate-[alertmsgUp_.7s_ease-in-out]' : 'animate-[alertmsgDown_.7s_ease-in-out]'}`}>
                <h2 className={Error === false ? 'text-lg text-blue-600' : 'text-lg text-rose-600'}>{Error === true ? 'Error' : 'Sucesso'}</h2>
                <span className='text-base'>{message}</span>
                {!(page === 'Login' || clickDonation === true) && (<button type='button' title='Fechar' aria-label='Fechar Alerta' onClick={handleClose} className='bg-blue-600 text-white font-bold p-2 duration-[400ms] cursor-pointer mx-auto rounded hover:bg-green-600 active:bg-blue-600 active:text-black mt-3'>Fechar</button>)}
            </section>
        </div>
    );
};