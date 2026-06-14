import { Briefcase, PenTool, Share2, LayoutGrid, Image } from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "All Works", icon: LayoutGrid },
  { name: "Freelance", icon: Briefcase },
  { name: "Illustration", icon: PenTool },
  { name: "Logo Design", icon: Image },
  { name: "Social Media", icon: Share2 },
];

const CategoryTabs = ({ activeCategory, onCategoryChange }) => {
  const navigate = useNavigate();
  return (
    <div className="relative z-10 mt-6 flex flex-wrap justify-center gap-4">
      {categories.map((cat) => {
        const Icon = cat.icon;
        const active = cat.name === activeCategory;

        return (
          <button
            key={cat.name}
            onClick={() => {
              if (cat.name === "Freelance") {
                navigate("/projects/freelance");
              } else if (cat.name === "Illustration") {
                navigate("/projects/illustration");
              } else if (cat.name === "Social Media") {
                navigate("/projects/social-media");
              } else if (cat.name === "Logo Design") {
                navigate("/projects/logo-design");
              } else {
                onCategoryChange && onCategoryChange(cat.name);
              }
            }}
            className={`flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold shadow-md transition-all hover:-translate-y-1 ${active
                ? "bg-gradient-to-r from-[#7F5AF0] via-[#FF4D8D] to-[#FF9F43] text-white shadow-pink-200"
                : "bg-white/80 text-gray-700"
              }`}
          >
            <Icon size={17} />
            {cat.name}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryTabs;
