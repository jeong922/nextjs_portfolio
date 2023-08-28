import { ProjectData } from '@/service/project';
import React from 'react';
import MarkdownViewer from './MarkdownViewer';

type Props = {
  project: ProjectData;
};

export default function ProjectContent({ project }: Props) {
  return (
    <section className='flex flex-col'>
      <p className='self-end dark:text-gray-400'>{project.date.toString()}</p>
      <MarkdownViewer content={project.content} />
    </section>
  );
}
