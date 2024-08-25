import SideBar from '@/components/sidebar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main lang='pt-BR'>
      <SideBar />
      {children}
    </main>
  );
};
