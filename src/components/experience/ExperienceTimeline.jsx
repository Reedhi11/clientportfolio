import { motion } from "framer-motion";
import { Layers, Layout, PenTool, Laptop, MonitorSmartphone, Palette } from "lucide-react";

const EXPERIENCE_DATA = [
  {
    title: "Junior UI/UX Designer",
    company: "medtigo",
    date: "Nov 2024 – Present",
    location: "Pune, India",
    points: [
      "Design and optimize mobile and web user interfaces, improving navigation, accessibility, and overall user experience.",
      "Develop and maintain scalable design systems aligned with UX strategy and WCAG accessibility standards.",
      "Create social media graphics, LinkedIn creatives, Klaviyo email templates, and other marketing assets.",
      "Utilize AI-powered tools to accelerate design iterations and generate personalized content.",
      "Conduct user research and analyze user behavior to identify opportunities for improving usability.",
      "Edit and produce videos for educational courses and social media campaigns.",
      "Collaborate with cross-functional teams to deliver user-centered solutions."
    ],
    skills: ["UI/UX", "Design Systems", "Social Media", "Video", "AI"],
    accent: "#7F5AF0",
    bg: "from-[#F4F0FF] to-[#E8E0FF]",
    glow: "bg-[#7F5AF0]",
    icon: (
      <div className="relative flex items-center justify-center">
        <Laptop className="w-6 h-6 text-[#7F5AF0]" strokeWidth={1.5} />
        <div className="absolute -bottom-1 -right-1 bg-white/90 rounded-full p-0.5 shadow-sm">
          <PenTool className="w-3 h-3 text-[#7F5AF0]" strokeWidth={2.5} />
        </div>
      </div>
    ),
  },
  {
    title: "UI/UX Designer",
    company: "OSBEAM IT Pvt. Ltd.",
    date: "Nov 2023 – Nov 2024",
    location: "Pune, India",
    points: [
      "Designed and developed the company website, admin panel, and internal applications emphasizing responsive design.",
      "Created intuitive mobile and web interfaces for a Leave Management System.",
      "Developed wireframes, user flows, prototypes, and high-fidelity designs for product requirements.",
      "Produced social media creatives, banners, and promotional marketing materials.",
      "Designed logos and branding assets for clients while maintaining brand identity.",
      "Worked closely with development teams to ensure accurate implementation."
    ],
    skills: ["Web Design", "Admin Panels", "Wireframing", "Prototyping", "Branding"],
    accent: "#FF4D8D",
    bg: "from-[#FFF0F5] to-[#FFE0EC]",
    glow: "bg-[#FF4D8D]",
    icon: <MonitorSmartphone className="w-6 h-6 text-[#FF4D8D]" strokeWidth={1.5} />,
  },
  {
    title: "Freelance Designer",
    company: "Multiple Clients",
    date: "2022 – Present",
    location: "Pune, India",
    points: [
      "Designed engaging social media creatives for multiple clients across various industries.",
      "Created modern and professional brochures for PG accommodations highlighting key offerings.",
      "Developed distinctive logo concepts and brand identities tailored to clients' business goals.",
      "Liveheart Events: Designed event branding assets including banners, stage backdrops, social media creatives, and promotional content, along with basic video editing for marketing reels and event campaigns.",
      "Taurus Financial Services: Created social media creatives and marketing visuals that helped communicate financial services, investment-related content, and brand messaging across digital platforms."
    ],
    skills: ["Social Media", "Brochures", "Logo Design", "Client Mgmt", "DIY"],
    accent: "#FF9F43",
    bg: "from-[#FFF8F0] to-[#FFEFD9]",
    glow: "bg-[#FF9F43]",
    icon: <Palette className="w-6 h-6 text-[#FF9F43]" strokeWidth={1.5} />,
  },
];

const ExperienceCard = ({ exp, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative w-full h-full flex"
    >
      <div className={`relative w-full flex flex-col bg-gradient-to-br ${exp.bg} border border-white/80 p-5 rounded-[1.5rem] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group`}>
        
        {/* Subtle Glow Element */}
        <div 
          className={`absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none ${exp.glow}`}
        />

        <div className="relative z-10 flex flex-col h-full gap-4">
          
          {/* Header Area */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/80 backdrop-blur-sm flex items-center justify-center text-xl shadow-sm border border-white/80 shrink-0">
              {exp.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-brand-dark leading-tight">
                {exp.title}
              </h3>
              <p className="text-[13px] font-semibold text-brand-dark/70 mt-0.5">
                {exp.company}
              </p>
              <div className="mt-1 flex flex-wrap items-center gap-1.5 text-[9px] uppercase font-bold tracking-widest text-brand-dark/50">
                <span style={{ color: exp.accent }}>{exp.date}</span>
                <span>•</span>
                <span>{exp.location}</span>
              </div>
            </div>
          </div>

          {/* Points List */}
          <div className="pt-2 flex-grow">
            <ul className="space-y-2">
              {exp.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 opacity-80" style={{ background: exp.accent }} />
                  <span className="text-[13px] text-brand-dark/80 leading-relaxed font-medium">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-1.5 pt-4 mt-auto">
            {exp.skills.map((skill, i) => (
              <span 
                key={i}
                className="px-2 py-1 rounded-md bg-white/60 border border-white/80 text-[9px] font-bold text-brand-dark/70 backdrop-blur-sm uppercase tracking-wider"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>
      </div>
    </motion.div>
  );
};

const ExperienceTimeline = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 pb-16 sm:pb-20">
      
      {/* Title */}
      <div className="mb-6 text-center">
          <h2 className="text-3xl font-display font-bold text-brand-dark">
            Career <span className="text-gradient-funky">Footprints</span>
          </h2>
      </div>

      {/* 3 Column Horizontal Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
        {EXPERIENCE_DATA.map((exp, i) => (
          <ExperienceCard key={i} exp={exp} index={i} />
        ))}
      </div>

    </div>
  );
};

export default ExperienceTimeline;
