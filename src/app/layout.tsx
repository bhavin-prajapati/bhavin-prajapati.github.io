import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import MobileNav from '@/components/MobileNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bhavin Prajapati',
  description: 'Visionary Coder, Father, Astute Observationist',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="lg:flex min-h-screen">
          <Sidebar />
          <MobileNav />
          <main className="flex-1 lg:ml-72">
            <div className="max-w-3xl mx-auto px-6 py-10 lg:py-16">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
