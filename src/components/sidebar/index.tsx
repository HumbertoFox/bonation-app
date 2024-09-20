'use client';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faUserPlus, faSquarePen, faUserPen, faFileCircleCheck, faRightFromBracket, faCalendarAlt, faClipboardCheck, faChartBar } from '@fortawesome/free-solid-svg-icons';
import EnterpriseImg from '@/assets/LOGOBFN-INTER.png';
import Image from 'next/image';
import Link from 'next/link';
const routes = {
    RegisterDonation: '/dashboard/registerdonation',
    RegisterDonor: '/dashboard/registerdonor',
    EditDonation: '/dashboard/editdonation',
    EditDonor: '/dashboard/editdonor',
    ScheduleCollection: '/dashboard/underconstruction',
    ConfirmCollection: '/dashboard/underconstruction',
    Report: '/dashboard/report',
    Agenda: '/dashboard/underconstruction'
};
const icons = {
    RegisterDonation: faPenToSquare,
    RegisterDonor: faUserPlus,
    EditDonation: faSquarePen,
    EditDonor: faUserPen,
    ScheduleCollection: faFileCircleCheck,
    ConfirmCollection: faClipboardCheck,
    Report: faChartBar,
    Agenda: faCalendarAlt
};
const linkNames = {
    RegisterDonation: 'Cadastrar Doação',
    RegisterDonor: 'Cadastrar Doador',
    EditDonation: 'Editar Doação',
    EditDonor: 'Editar Doador',
    ScheduleCollection: 'Agendar Coleta',
    ConfirmCollection: 'Confirmar Coleta',
    Report: 'Relatório',
    Agenda: 'Agenda'
};
export default function SideBar() {
    const [navMenuLink, setNavMenuLink] = useState<string>('');
    const router = useRouter();
    const handleMenuLinkClick = useCallback((element: string) => {
        setNavMenuLink(element);
        localStorage.setItem('activeMenuLinkSelection', element);
    }, []);
    const linkClass = (linkName: string) => `flex items-center p-2.5 gap-[15px] duration-[400ms] ${navMenuLink === linkName ? 'bg-[#79D1FF] text-white hover:text-[black]' : 'hover:text-[#79D1FF]'}`;
    useEffect(() => {
        const activeMenuLinkSelection = localStorage.getItem('activeMenuLinkSelection');
        if (activeMenuLinkSelection) {
            setNavMenuLink(activeMenuLinkSelection);
            router.push(routes[activeMenuLinkSelection as keyof typeof routes]);
        } else {
            router.push(routes['Agenda']);
        };
    }, [router]);
    return (
        <div className='w-[200px] h-full flex flex-col fixed border-r-[3px] border-[#79D1FF] bg-[#AAF998] duration-[400ms] overflow-hidden max-[1080px]:w-[70px]'>
            <Link href={'/menu'} className='max-w-[150px] mx-auto duration-[400ms]'>
                <Image src={EnterpriseImg} className='w-full' alt='Logo Empresa' priority />
            </Link>
            <nav>
                {Object.keys(routes).map((key) => (
                    <div key={key} className='duration-[400ms]'>
                        <Link
                            title={linkNames[key as keyof typeof linkNames]}
                            href={routes[key as keyof typeof routes]}
                            className={linkClass(key)}
                            onClick={() => handleMenuLinkClick(key)}
                        >
                            <FontAwesomeIcon icon={icons[key as keyof typeof icons]} className='text-[2rem]' />
                            <span
                                className='max-[1080px]:hidden'>
                                {linkNames[key as keyof typeof linkNames]}
                            </span>
                        </Link>
                    </div>
                ))}
                <div className=' duration-[400ms] mt-4'>
                    <Link
                        title='Sair/Logout'
                        href={'/logout'}
                        className='flex items-center p-2.5 gap-[15px] duration-[400ms] hover:text-[white] active:bg-[#79D1FF]'
                    >
                        <FontAwesomeIcon icon={faRightFromBracket} className='text-[2rem] rotate-180' />
                        <span
                            className='max-[1080px]:hidden'>
                            Sair do Sistema
                        </span>
                    </Link>
                </div>
            </nav>
        </div>
    );
};