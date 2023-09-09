import FilterProject from '@/components/FilterProject';
import { getAllProject } from '@/service/project';
import Image from 'next/image';
import React from 'react';

export default async function ProjectsPage() {
  const projects = await getAllProject();
  const categories = [
    ...new Set(projects.flatMap((project) => project.category)),
  ];

  return (
    <section className='pt-16 max-w-screen-2xl mx-auto'>
      <div className='relative flex items-center justify-center p-4'>
        <Image
          className='w-full mb-4 rounded-md shadow-lg h-1/5 max-h-[300px] object-cover brightness-75'
          src={`/images/cool-background.png`}
          alt='image'
          width={650}
          height={420}
        />
        <div className='absolute text-white w-full h-full p-20 flex items-center'>
          <h2 className='text-4xl font-bold mb-2'>Project</h2>
        </div>
      </div>
      <FilterProject projects={projects} categories={categories} />
    </section>
  );
}
