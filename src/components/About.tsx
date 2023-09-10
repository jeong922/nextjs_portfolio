import { AiFillGithub } from 'react-icons/ai';
import TitleUI from './UI/TitleUI';
import Skills from './Skills';

export default function About() {
  return (
    <section className='max-w-screen-xl mx-auto p-4'>
      <TitleUI text='About' />

      <div className='p-4 rounded-md dark:text-darkModeText text-lg flex flex-col items-center justify-center'>
        <div className='flex flex-col justify-center items-center p-4'>
          <span className='text-xl font-semibold mb-4'>GitHub</span>
          <a
            className='hover:text-rose-300 flex items-center'
            href='https://github.com/jeong922'
          >
            <AiFillGithub />
            <span className='ml-2'>jeong922</span>
          </a>
        </div>
        {/* <Skills /> */}
      </div>
    </section>
  );
}
