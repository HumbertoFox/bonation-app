'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/components/style/menu.module.css';
import EnterpriseImg from '@/assets/LOGOBFN-INTER.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faUserPlus, faSquarePen, faUserPen, faCalendarPlus, faCalendarCheck, faCalendarDays, faFileCircleCheck, faRightToBracket } from '@fortawesome/free-solid-svg-icons';

export default function Menu() {
    const [navMenuLink, setNavMenuLink] = useState('');
    const router = useRouter();
    const handlesMenuLinkClick = (element: string) => {
        setNavMenuLink(element);
        localStorage.setItem('activeMenuLinkSelection', element);
    };

    useEffect(() => {
        const activeMenuLinkSelection = localStorage.getItem('activeMenuLinkSelection');
        if (activeMenuLinkSelection != null) {
            setNavMenuLink(activeMenuLinkSelection);
            if (activeMenuLinkSelection == 'RegisterDonation') {
                router.push('/registerdonation');
            } else if (activeMenuLinkSelection == 'RegisterDonor') {
                router.push('/registerdonor');
            } else if (activeMenuLinkSelection == 'EditDonation') {
                router.push('/underconstruction');
            } else if (activeMenuLinkSelection == 'EditDonor') {
                router.push('/editdonor');
            } else if (activeMenuLinkSelection == 'ScheduleCollection') {
                router.push('/underconstruction');
            } else if (activeMenuLinkSelection == 'ConfirmCollection') {
                router.push('/underconstruction');
            } else if (activeMenuLinkSelection == 'Report') {
                router.push('/underconstruction');
            };
        } else {
            setNavMenuLink('Agenda');
            router.push('/underconstruction');
        };
    }, [router]);
    return (
        <div className={styles.section}>
            <Link className={styles.linkimg} href={'/registermenu'}>
                <Image src={EnterpriseImg} alt='Logo Empresa' priority />
            </Link>
            <nav>
                <div>
                    <Link title='Cadastrar Doação' href={'/registerdonation'} className={navMenuLink == 'RegisterDonation' ? styles.active : ''} onClick={() => handlesMenuLinkClick('RegisterDonation')}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                        <span>Cadastrar Doação</span>
                    </Link>
                </div>
                <div>
                    <Link title='Cadastrar Doador' href={'/registerdonor'} className={navMenuLink == 'RegisterDonor' ? styles.active : ''} onClick={() => handlesMenuLinkClick('RegisterDonor')}>
                        <FontAwesomeIcon className={styles.rotatesvg} icon={faUserPlus} />
                        <span>Cadastrar Doador</span>
                    </Link>
                </div>
                <div>
                    <Link title='Editar Doação' href={'/underconstruction'} className={navMenuLink == 'EditDonation' ? styles.active : ''} onClick={() => handlesMenuLinkClick('EditDonation')}>
                        <FontAwesomeIcon icon={faSquarePen} />
                        <span>Editar Doação</span>
                    </Link>
                </div>
                <div>
                    <Link title='Editar Doador' href={'/editdonor'} className={navMenuLink == 'EditDonor' ? styles.active : ''} onClick={() => handlesMenuLinkClick('EditDonor')}>
                        <FontAwesomeIcon className={styles.rotatesvg} icon={faUserPen} />
                        <span>Editar Doador</span>
                    </Link>
                </div>
                <div>
                    <Link title='Agendar Coleta' href={'/underconstruction'} className={navMenuLink == 'ScheduleCollection' ? styles.active : ''} onClick={() => handlesMenuLinkClick('ScheduleCollection')}>
                        <FontAwesomeIcon icon={faCalendarPlus} />
                        <span>Agendar Coleta</span>
                    </Link>
                </div>
                <div>
                    <Link title='Confirmar Coleta' href={'/underconstruction'} className={navMenuLink == 'ConfirmCollection' ? styles.active : ''} onClick={() => handlesMenuLinkClick('ConfirmCollection')}>
                        <FontAwesomeIcon icon={faCalendarCheck} />
                        <span>Confirmar Coleta</span>
                    </Link>
                </div>
                <div>
                    <Link title='Relatório' href={'/underconstruction'} className={navMenuLink == 'Report' ? styles.active : ''} onClick={() => handlesMenuLinkClick('Report')}>
                        <FontAwesomeIcon className={styles.rotatesvg} icon={faFileCircleCheck} />
                        <span>Relatório</span>
                    </Link>
                </div>
                <div>
                    <Link title='Agenda' href={'/underconstruction'} className={navMenuLink == 'Agenda' ? styles.active : ''} onClick={() => handlesMenuLinkClick('Agenda')}>
                        <FontAwesomeIcon icon={faCalendarDays} />
                        <span>Agenda</span>
                    </Link>
                </div>
                <div>
                    <Link href={'/login'}>
                        <FontAwesomeIcon className={styles.rotatesvg} icon={faRightToBracket} />
                        <span>Sair do Sistema</span>
                    </Link>
                </div>
            </nav>
        </div>
    );
};