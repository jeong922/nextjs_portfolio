import CategoryUI from './UI/CategoryUI';
import { AiFillGithub } from 'react-icons/ai';
import TitleUI from './UI/TitleUI';

export default function About() {
  return (
    <section className='max-w-screen-xl mx-auto p-4'>
      <TitleUI text='About' />
      <div className='p-4 rounded-md dark:text-darkModeText text-lg flex flex-col items-center'>
        <a
          className='hover:text-rose-300 flex items-center'
          href='https://github.com/jeong922'
        >
          <AiFillGithub />
          <span className='ml-2'>jeong922</span>
        </a>
      </div>
    </section>
  );
}
