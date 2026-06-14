import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import ProjectsHero from "../components/projects/ProjectsHero";
import CategoryTabs from "../components/projects/CategoryTabs";
import ProjectCarousel from "../components/projects/ProjectCarousel";
import BackgroundDecor from "../components/projects/BackgroundDecor";
import { PROJECTS_DATA } from "../data/projectsData";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All Works");

  let filteredProjects = activeCategory === "All Works"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeCategory);

  if (!filteredProjects || filteredProjects.length === 0) {
    filteredProjects = PROJECTS_DATA;
  }

  return (
    <MainLayout>
      <main className="relative min-h-screen overflow-hidden bg-[#FFF9F5] px-4 pt-[110px] pb-12 text-[#1E1E1E]">
        <BackgroundDecor />
        <ProjectsHero />
        <CategoryTabs activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        <ProjectCarousel projects={filteredProjects} />
      </main>
    </MainLayout>
  );
};

export default Projects;
