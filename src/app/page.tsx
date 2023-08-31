import CarouselProjects from '@/components/CarouselProjects';
import { getNewProjects } from '@/service/project';

export default async function HomePage() {
  const projects = await getNewProjects();
  return (
    <div>
      <CarouselProjects projects={projects} />
    </div>
  );
}
