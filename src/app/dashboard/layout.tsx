import SideBar from '@/components/sidebar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <SideBar />
      {children}
    </main>
  );
};