'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import ThemeModeButton from './ThemeModeButton';

// TODO : 스크롤 이벤트 처리하기
export default function Header() {
  const pathName = usePathname();
  const [isScroll, setIsScroll] = useState(false);

  const getScrollPosition = () => {
    window.scrollY >= 64 ? setIsScroll(true) : setIsScroll(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', getScrollPosition);
    return () => {
      window.removeEventListener('scroll', getScrollPosition);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-20 w-full ${
        isScroll ? 'bg-neutral-50/80 dark:bg-darkbg/70' : 'bg-transparent'
      }`}
    >
      <div className='h-16 flex justify-between px-6 items-center max-w-screen-2xl mx-auto'>
        <Link className='text-2xl font-semibold dark:text-neutral-50' href='/'>
          Jeong
        </Link>
        <div className='flex gap-x-4'>
          <ThemeModeButton />
          <nav>
            <Link
              href='/project'
              className={`${
                pathName === '/project' &&
                'font-semibold text-rose-300 dark:text-rose-300'
              } text-neutral-500 dark:text-darkModeText`}
            >
              Project
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
