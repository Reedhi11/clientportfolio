import MainLayout from "../layouts/MainLayout";
import FloatingElements from "../components/about/FloatingElements";
import AboutHero from "../components/about/AboutHero";
import AboutImageCard from "../components/about/AboutImageCard";
import StoryContent from "../components/about/StoryContent";
import JourneyTimeline from "../components/about/JourneyTimeline";
import SkillsCloud from "../components/about/SkillsCloud";
import ExperienceCards from "../components/about/ExperienceCards";

const About = () => {
  return (
    <MainLayout>
      <div id="about" className="relative w-full">
        <FloatingElements />

        {/* Intro */}
        <AboutHero />

        {/* Photo + Story */}
        <section className="relative w-full py-4 sm:py-6">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-4 gap-x-2 lg:gap-x-6 items-center">
              <div className="lg:col-span-4 order-1 lg:order-1 flex justify-center lg:justify-end">
                <AboutImageCard />
              </div>
              <div className="lg:col-span-8 order-2 lg:order-2 lg:pl-4">
                <StoryContent />
              </div>
            </div>
          </div>
        </section>

        {/* Journey timeline */}
        <section className="relative w-full py-6 sm:py-8">
          <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
            <JourneyTimeline />
          </div>
        </section>

        {/* Skills */}
        <section className="relative w-full py-6 sm:py-8 pb-12">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <SkillsCloud />
          </div>
        </section>

        {/* Experience cards */}
        {/* <section className="relative w-full py-12 sm:py-16 pb-24">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
            <ExperienceCards />
          </div>
        </section> */}
      </div>
    </MainLayout>
  );
};

export default About;
