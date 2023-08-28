import { Project } from '@/service/project';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

type Props = {
  project: Project;
  type: 'prev' | 'next';
};

export default function AdjacentProject({ project, type }: Props) {
  return (
    <Link
      href={`/project/${project.path}`}
      className='relative w-full overflow-hidden bg-black max-h-56 group'
    >
      <Image
        className='object-cover w-full duration-300 ease-linear transform opacity-40 group-hover:scale-105'
        src={`/images/projects/${project.path}.png`}
        alt={project.title}
        width={150}
        height={100}
      />
      <div className='absolute flex items-center justify-around w-full px-3 text-white -translate-x-1/2 -translate-y-1/2 sm:px-8 group top-1/2 left-1/2'>
        {type === 'prev' && (
          <BsArrowLeftCircle className='m-4 text-3xl opacity-70 group-hover:opacity-100 sm:text-5xl' />
        )}
        <div className='w-full text-center'>
          <h3 className='text-sm font-bold sm:text-2xl'>{project.title}</h3>
          <p className='text-xs font-bold sm:text-sm opacity-70 line-clamp-2'>
            {project.description}
          </p>
        </div>
        {type === 'next' && (
          <BsArrowRightCircle className='m-4 text-3xl opacity-70 group-hover:opacity-100 sm:text-5xl' />
        )}
      </div>
    </Link>
  );
}
