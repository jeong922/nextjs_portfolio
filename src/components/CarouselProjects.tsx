import { Project } from '@/service/project';
import ProjectCard from './ProjectCard';
import CarouselSlide from './CarouselSlide';

type Props = {
  projects: Project[];
};

export default function CarouselProjects({ projects }: Props) {
  return (
    <section className='p-4 max-w-screen-2xl mx-auto '>
      <h2 className='text-xl text-neutral-700 font-semibold dark:text-darkModeText px-4 mb-2'>
        새로운 프로젝트
      </h2>
      <CarouselSlide>
        {projects.map((project) => (
          <div key={project.path} className='p-4'>
            <ProjectCard project={project} />
          </div>
        ))}
      </CarouselSlide>
    </section>
  );
}
