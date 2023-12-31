import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '@/components/Footer';
import TopButton from '@/components/TopButton';
import { DarkModeProvider } from '@/context/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: 'Jeong | %s',
    default: 'Jeong',
  },
  description: '소소한 프로젝트 모음집',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={inter.className}>
      <DarkModeProvider>
        <body className='dark:bg-darkbg'>
          <Header />
          <div className='relative min-h-screen'>
            <main>{children}</main>
          </div>
          <TopButton />
          <Footer />
        </body>
      </DarkModeProvider>
    </html>
  );
}
