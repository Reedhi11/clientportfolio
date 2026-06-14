import { Briefcase, Star, PenTool, Zap } from "lucide-react";

const stats = [
  { icon: Briefcase, number: "30+", label: "Projects Completed" },
  { icon: Star, number: "10+", label: "Happy Clients" },
  { icon: PenTool, number: "4", label: "Creative Categories" },
  { icon: Zap, number: "Endless", label: "Ideas & Passion" },
];

const ProjectStats = () => {
  return (
    <section className="relative z-10 mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 rounded-3xl bg-white/70 p-6 shadow-xl backdrop-blur md:grid-cols-4">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="flex items-center gap-4 border-gray-200 md:border-r last:border-r-0"
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-full text-white ${
                index === 0
                  ? "bg-[#7F5AF0]"
                  : index === 1
                  ? "bg-[#FF4D8D]"
                  : index === 2
                  ? "bg-[#FF9F43]"
                  : "bg-[#7F5AF0]"
              }`}
            >
              <Icon size={24} />
            </div>

            <div>
              <h3 className="text-2xl font-black">{item.number}</h3>
              <p className="text-xs font-medium uppercase text-gray-600">
                {item.label}
              </p>
              <div className="mt-2 h-1 w-10 rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#FF4D8D]" />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ProjectStats;
