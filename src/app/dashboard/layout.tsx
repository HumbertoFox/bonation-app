import SideBar from '@/components/sidebar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='max-w-[1440px] h-screen flex max-sm:w-[375px]'>
      <SideBar />
      <div className='relative left-[200px] w-calc-sidebarfull max-[1080px]:w-calc-sidebarmin max-[1080px]:left-[70px] duration-[400ms]'>
        {children}
      </div>
    </main>
  );
};