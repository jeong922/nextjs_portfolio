import FilterProject from '@/components/FilterProject';
import { getAllProject } from '@/service/project';
import React from 'react';

export default async function ProjectsPage() {
  const projects = await getAllProject();
  const categories = [
    ...new Set(projects.flatMap((project) => project.category)),
  ];

  return (
    <section className='pt-16 max-w-screen-2xl mx-auto '>
      <FilterProject projects={projects} categories={categories} />
    </section>
  );
}
