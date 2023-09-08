import CategoryUI from './UI/CategoryUI';
import { AiFillGithub } from 'react-icons/ai';

export default function About() {
  return (
    <section className='max-w-screen-2xl mx-auto p-4'>
      <div className='p-4 bg-[#6B648B] rounded-md text-darkModeText text-lg flex items-center justify-center flex-col gap-y-4'>
        <a
          className='hover:text-rose-300 flex items-center'
          href='https://github.com/jeong922'
        >
          <AiFillGithub className='h-6 w-6' />
          <span className='ml-2'>jeong922</span>
        </a>
      </div>
    </section>
  );
}
