import { Project } from '@/service/project';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CategoryUI from './UI/CategoryUI';

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
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
              <div key={index}>
                <CategoryUI category={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
