export default function MenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='w-full max-w-[1440px] h-screen flex flex-col justify-center items-center mx-auto max-sm:w-[375px]'>
      <div className='flex flex-wrap justify-center items-center gap-[30px] p-[30px] mx-[20px] border border-[blue] rounded-[15px]'>
        {children}
      </div>
    </main>
  );
};