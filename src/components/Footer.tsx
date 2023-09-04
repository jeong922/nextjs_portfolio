import { AiFillGithub } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className='relative py-3 transform translate-y-full bg-rose-50 px-7 dark:bg-slate-900'>
      <div className='mx-auto max-w-screen-2xl relative top-0'>
        <div className='flex justify-between mb-1'>
          <p className='text-xs text-gray-500 dark:text-gray-300'>
            Copyright © jeong922. All Rights Reserved.
          </p>
          <a
            href='https://github.com/jeong922'
            className='flex items-center text-gray-600 dark:text-gray-300'
          >
            <AiFillGithub />
          </a>
        </div>
        <a
          href='https://github.com/jeong922/nextjs_portfolio'
          className='flex items-center text-xs text-gray-500 dark:text-gray-300 '
        >
          <AiFillGithub />
          <span className='ml-2'>
            https://github.com/jeong922/nextjs_portfolio
          </span>
        </a>
      </div>
    </footer>
  );
}
