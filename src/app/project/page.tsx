import ProjectList from '@/components/ProjectList';
import { getAllProject } from '@/service/project';
import React from 'react';

export default async function ProjectPage() {
  const projects = await getAllProject();
  return (
    <section>
      <ProjectList projects={projects} />
    </section>
  );
}
