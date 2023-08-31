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

export type ProjectData = Project & {
  content: string;
  next: Project | null;
  prev: Project | null;
};

export const getAllProject = cache(async () => {
  const filePath = path.join(process.cwd(), 'data', 'project_data.json');
  return readFile(filePath, 'utf-8')
    .then<Project[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
});

export async function getProjectData(fileName: string): Promise<ProjectData> {
  const filePath = path.join(
    process.cwd(),
    'data',
    'project',
    `${fileName}.md`
  );
  const projects = await getAllProject();
  const project = projects.find((project) => project.path === fileName);

  if (!project) {
    throw new Error(`${fileName}에 해당하는 파일을 찾을 수 없습니다.`);
  }

  const index = projects.indexOf(project);
  const next = index > 0 ? projects[index - 1] : null;
  const prev = projects.length > index ? projects[index + 1] : null;
  const content = await readFile(filePath, 'utf-8');
  return { ...project, content, next, prev };
}

export async function getNewProjects(): Promise<Project[]> {
  return getAllProject().then((projects) => projects.slice(0, 4));
}
