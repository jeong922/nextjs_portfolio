import { Project } from '@/service/project';
import ProjectCard from './ProjectCard';
import CarouselSlide from './CarouselSlide';
import TitleUI from './UI/TitleUI';

type Props = {
  projects: Project[];
};

export default function CarouselProjects({ projects }: Props) {
  return (
    <section className='p-4 max-w-screen-2xl mx-auto '>
      <TitleUI text='새로운 프로젝트' />
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
