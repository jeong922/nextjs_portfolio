import About from '@/components/About';
import CarouselProjects from '@/components/CarouselProjects';
import HomeTitle from '@/components/HomeTitle';
import { getNewProjects } from '@/service/project';

export default async function HomePage() {
  const projects = await getNewProjects();
  return (
    <div className='relative -top-16'>
      <HomeTitle />
      <About />
      <CarouselProjects projects={projects} />
    </div>
  );
}
