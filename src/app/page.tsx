import CarouselProjects from '@/components/CarouselProjects';
import HomeTitle from '@/components/HomeTitle';
import { getNewProjects } from '@/service/project';

export default async function HomePage() {
  const projects = await getNewProjects();
  return (
    <div>
      <HomeTitle />
      <CarouselProjects projects={projects} />
    </div>
  );
}
