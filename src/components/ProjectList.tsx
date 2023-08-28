import { Project } from '@/service/project';
import ProjectCard from './ProjectCard';

type Props = {
  projects: Project[];
};

export default function ProjectList({ projects }: Props) {
  return (
    <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2'>
      {projects.map((project) => (
        <li key={project.path}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
