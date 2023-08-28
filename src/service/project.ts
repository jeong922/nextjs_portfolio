import { readFile } from 'fs/promises';
import path from 'path';
import { cache } from 'react';

export type Project = {
  title: string;
  description: string;
  date: Date;
  category: string[];
  path: string;
  featured: boolean;
};

export const getAllProject = cache(async () => {
  const filePath = path.join(process.cwd(), 'data', 'project_data.json');
  return readFile(filePath, 'utf-8')
    .then<Project[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
});
