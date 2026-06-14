import MainLayout from "../layouts/MainLayout";
import FloatingElements from "../components/about/FloatingElements";
import ExperienceHero from "../components/experience/ExperienceHero";
import ExperienceTimeline from "../components/experience/ExperienceTimeline";

const Experience = () => {
  return (
    <MainLayout>
      <div id="experience" className="relative w-full min-h-screen">
        <FloatingElements />
        <ExperienceHero />
        <ExperienceTimeline />
      </div>
    </MainLayout>
  );
};

export default Experience;
