'use client';

import { Project } from '@/service/project';
import React, { useState } from 'react';
import ProjectList from './ProjectList';
import Categories from './Categories';

type Props = {
  projects: Project[];
  categories: string[];
};

const ALL_POSTS = 'ALL';

export default function FilterProject({ projects, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? projects
      : projects.filter((project) =>
          project.category.find((v) => v === selected)
        );

  return (
    <div className='px-4'>
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
      <ProjectList projects={filtered} />
    </div>
  );
}
