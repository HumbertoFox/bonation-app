'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faUserPlus, faSquarePen, faUserPen, faCalendarPlus, faCalendarCheck, faCalendarDays, faFileCircleCheck, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import EnterpriseImg from '@/assets/LOGOBFN-INTER.png';
import Image from 'next/image';
import Link from 'next/link';

export default function SideBar() {
    const [navMenuLink, setNavMenuLink] = useState<string>('');
    const router = useRouter();
    const handlesMenuLinkClick = (element: string) => {
        setNavMenuLink(element);
        localStorage.setItem('activeMenuLinkSelection', element);
    };

    useEffect(() => {
        const activeMenuLinkSelection = localStorage.getItem('activeMenuLinkSelection');
        if (activeMenuLinkSelection !== null) {
            setNavMenuLink(activeMenuLinkSelection);
            if (activeMenuLinkSelection == 'RegisterDonation') {
                router.push('/dashboard/registerdonation');
            } else if (activeMenuLinkSelection == 'RegisterDonor') {
                router.push('/dashboard/registerdonor');
            } else if (activeMenuLinkSelection == 'EditDonation') {
                router.push('/dashboard/editdonation');
            } else if (activeMenuLinkSelection == 'EditDonor') {
                router.push('/dashboard/editdonor');
            } else if (activeMenuLinkSelection == 'ScheduleCollection') {
                router.push('/dashboard/underconstruction');
            } else if (activeMenuLinkSelection == 'ConfirmCollection') {
                router.push('/dashboard/underconstruction');
            } else if (activeMenuLinkSelection == 'Report') {
                router.push('/dashboard/report');
            };
        } else {
            setNavMenuLink('Agenda');
            router.push('/dashboard/underconstruction');
        };
    }, [router]);
    return (
        <div className='w-[12.5rem] h-screen flex flex-col fixed border-r-[3px] border-[#79D1FF] bg-[#AAF998] duration-[400ms] overflow-hidden max-[1080px]:w-[4.375rem]'>
            <Link href={'/menu/registermenu'} className='max-w-[150px] mx-auto duration-[400ms]'>
                <Image src={EnterpriseImg} className='w-full' alt='Logo Empresa' priority />
            </Link>
            <nav>
                <div className=' duration-[400ms]'>
                    <Link title='Cadastrar Doação' href={'/dashboard/registerdonation'} className='flex items-center p-2.5 gap-[0.938rem] duration-[400ms] hover:text-white' onClick={() => handlesMenuLinkClick('RegisterDonation')}>
                        <FontAwesomeIcon icon={faPenToSquare} className='text-[2rem]' />
                        <span className='max-[1080px]:hidden'>Cadastrar Doação</span>
                    </Link>
                </div>
                <div className=' duration-[400ms]'>
                    <Link title='Cadastrar Doador' href={'/dashboard/registerdonor'} className='flex items-center p-2.5 gap-[0.938rem] duration-[400ms] hover:text-white' onClick={() => handlesMenuLinkClick('RegisterDonor')}>
                        <FontAwesomeIcon icon={faUserPlus} className='text-[2rem]' />
                        <span className='max-[1080px]:hidden'>Cadastrar Doador</span>
                    </Link>
                </div>
                <div className=' duration-[400ms]'>
                    <Link title='Editar Doação' href={'/dashboard/editdonation'} className='flex items-center p-2.5 gap-[0.938rem] duration-[400ms] hover:text-white' onClick={() => handlesMenuLinkClick('EditDonation')}>
                        <FontAwesomeIcon icon={faSquarePen} className='text-[2rem]' />
                        <span className='max-[1080px]:hidden'>Editar Doação</span>
                    </Link>
                </div>
                <div className=' duration-[400ms]'>
                    <Link title='Editar Doador' href={'/dashboard/editdonor'} className='flex items-center p-2.5 gap-[0.938rem] duration-[400ms] hover:text-white' onClick={() => handlesMenuLinkClick('EditDonor')}>
                        <FontAwesomeIcon icon={faUserPen} className='text-[2rem]' />
                        <span className='max-[1080px]:hidden'>Editar Doador</span>
                    </Link>
                </div>
                <div className=' duration-[400ms]'>
                    <Link title='Agendar Coleta' href={'/dashboard/underconstruction'} className='flex items-center p-2.5 gap-[0.938rem] duration-[400ms] hover:text-white' onClick={() => handlesMenuLinkClick('ScheduleCollection')}>
                        <FontAwesomeIcon icon={faCalendarPlus} className='text-[2rem]' />
                        <span className='max-[1080px]:hidden'>Agendar Coleta</span>
                    </Link>
                </div>
                <div className=' duration-[400ms]'>
                    <Link title='Confirmar Coleta' href={'/dashboard/underconstruction'} className='flex items-center p-2.5 gap-[0.938rem] duration-[400ms] hover:text-white' onClick={() => handlesMenuLinkClick('ConfirmCollection')}>
                        <FontAwesomeIcon icon={faCalendarCheck} className='text-[2rem]' />
                        <span className='max-[1080px]:hidden'>Confirmar Coleta</span>
                    </Link>
                </div>
                <div className=' duration-[400ms]'>
                    <Link title='Relatório' href={'/dashboard/report'} className='flex items-center p-2.5 gap-[0.938rem] duration-[400ms] hover:text-white' onClick={() => handlesMenuLinkClick('Report')}>
                        <FontAwesomeIcon icon={faFileCircleCheck} className='text-[2rem]' />
                        <span className='max-[1080px]:hidden'>Relatório</span>
                    </Link>
                </div>
                <div className=' duration-[400ms]'>
                    <Link title='Agenda' href={'/dashboard/underconstruction'} className='flex items-center p-2.5 gap-[0.938rem] duration-[400ms] hover:text-white' onClick={() => handlesMenuLinkClick('Agenda')}>
                        <FontAwesomeIcon icon={faCalendarDays} className='text-[2rem]' />
                        <span className='max-[1080px]:hidden'>Agenda</span>
                    </Link>
                </div>
                <div className=' duration-[400ms] mt-4'>
                    <Link href={'/login'} className='flex items-center p-2.5 gap-[0.938rem] duration-[400ms] hover:text-white'>
                        <FontAwesomeIcon icon={faRightFromBracket} className='text-[2rem] rotate-180' />
                        <span className='max-[1080px]:hidden'>Sair do Sistema</span>
                    </Link>
                </div>
            </nav>
        </div>
    );
};