import AdjacentProject from '@/components/AdjacentProject';
import ProjectContent from '@/components/ProjectContent';
import { getProjectData } from '@/service/project';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProjectPage({ params: { slug } }: Props) {
  const project = await getProjectData(slug);
  return (
    <article className='w-full p-4 mb-4 overflow-hidden bg-gray-100 rounded-md dark:bg-slate-800 max-w-screen-2xl mx-auto mt-6'>
      <div className='relative flex items-center justify-center'>
        <Image
          className='w-full mb-4 rounded-md shadow-lg h-1/5 max-h-[300px] object-cover brightness-75'
          src={`/images/projects/${project.path}.png`}
          alt={project.title}
          width={650}
          height={420}
        />
        <div className='absolute flex flex-col items-center justify-center text-white'>
          <h2 className='text-4xl font-bold mb-2'>{project.title}</h2>
          <p className='font-bold text-neutral-300 line-clamp-2'>
            {project.description}
          </p>
        </div>
      </div>
      <ProjectContent project={project} />
      <section className='flex shadow-md'>
        {project.prev && <AdjacentProject project={project.prev} type='prev' />}
        {project.next && <AdjacentProject project={project.next} type='next' />}
      </section>
    </article>
  );
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const project = await getProjectData(slug);
  return {
    title: `${project.title}`,
    description: `${project?.title} 상세 정보`,
  };
}
