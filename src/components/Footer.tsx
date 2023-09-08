import { AiFillGithub } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className='relative py-4 transform translate-y-full px-7 bg-slate-900'>
      <div className='mx-auto max-w-screen-2xl relative top-0 flex flex-col items-center'>
        <div className='flex justify-between mb-1'>
          <p className='text-xs text-gray-300'>© jeong922</p>
        </div>
        <a
          href='https://github.com/jeong922/nextjs_portfolio'
          className='flex items-center text-xs text-gray-300 hover:text-rose-300'
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
