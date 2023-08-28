import { Project } from '@/service/project';
import Image from 'next/image';
import Link from 'next/link';
import CategoryUI from './UI/CategoryUI';

type Props = {
  projects: Project[];
};

export default function ProjectList({ projects }: Props) {
  console.log(projects);
  return (
    <ul className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2'>
      {projects.map((project) => (
        <li key={project.path}>
          <Link href={`/posts/${project.path}`} key={project.path}>
            <div className='overflow-hidden duration-300 ease-in-out rounded-md shadow-md cursor-pointer dark:bg-slate-800 dark:shadow-zinc-900 group'>
              <Image
                className='w-full duration-300 ease-linear transform aspect-video group-hover:scale-105'
                src={`/images/projects/${project.path}.png`}
                alt={project.title}
                width={300}
                height={200}
                priority
              />
              <div className='flex flex-col items-center p-2 '>
                <p className='my-2 text-base font-bold truncate line-clamp-2 dark:text-darkModeText'>
                  {project.title}
                </p>
                <div className='flex gap-x-2'>
                  {project.category.map((item, index) => (
                    // <span key={index} className='text-xs text-blue-300'>
                    //   {item}
                    // </span>
                    <div key={index}>
                      <CategoryUI category={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
