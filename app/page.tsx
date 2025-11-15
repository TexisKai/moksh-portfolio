import TextRevealCard from './components/TextRevealCard';
import ProjectCard from './components/ProjectCard';

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="py-12">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-semibold">Moksh Prajapati</h1>
          <p className="text-gray-300 mt-2">Digital Marketer • Performance Marketing • Instagram Growth</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <TextRevealCard text="You know The Buisness" revealText="I know The Chemistry">
            <h2 className="text-white text-lg mb-2">Hey, I'm Moksh — Digital Marketer & Growth Specialist</h2>
            <p className="text-gray-400 text-sm">Currently interning as Sales Executive at CompetenceConsulting.in (Alibaba.com channel partner)</p>
          </TextRevealCard>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-medium mb-6">Projects & Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard title="Instagram Growth — Glamour Glow" subtitle="@glamour_glow2023" desc="Beauty & fashion page growth through reels and trend optimization" imgSrc="/projects/glamour-glow.png" />
            <ProjectCard title="Instagram Growth — Girls Being Girls" subtitle="@girlsbeinggirls02" desc="High-engagement meme/community page" imgSrc="/projects/girlsbeinggirls.png" />
            <ProjectCard title="Instagram Growth — Aesthx Makeups" subtitle="@aesthxmakeups" desc="Aesthetic makeup content and reels growth" imgSrc="/projects/aesthxmakeups.png" />
            <ProjectCard title="Sales Internship" subtitle="CompetenceConsulting.in" desc="Sales executive intern supporting Alibaba.com onboarding" imgSrc="/projects/alibaba-internship.png" />
          </div>
        </div>
      </section>
    </div>
  );
}
