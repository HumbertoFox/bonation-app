export default function MenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='max-w-[1440px] h-screen flex flex-col justify-center items-center mx-auto max-sm:w-[375px]'>
      <div className='flex flex-wrap justify-center items-center gap-[3.125rem] p-[50px] border border-[blue] rounded-[15px]'>
        {children}
      </div>
    </main>
  );
};