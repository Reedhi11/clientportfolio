import { Briefcase, PenTool, LayoutTemplate, Share2 } from "lucide-react";
import hoopArtImg from "../assets/freelance/wedding hoop.jpeg";

import illustrationImg from "../assets/illustration/1.jpg";
import socialImg from "../assets/socialmedia/3 social media.jpg";
import logoBg from "../assets/logo/logo_hero_bg.png";

export const CATEGORIES = [
  { id: "all", label: "All Works", icon: null },
  { id: "freelance", label: "Freelance", icon: Briefcase },
  { id: "illustration", label: "Illustration", icon: PenTool },
  { id: "logo", label: "Logo Design", icon: LayoutTemplate },
  { id: "social", label: "Social Media", icon: Share2 },
];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Handcrafted Memories",
    category: "Freelance",
    categoryId: "freelance",
    description: "A curated collection of bespoke crafts and designs, each telling a unique story of artistry, patience, and love. Made by hand, made with heart.",
    tools: ["Embroidery", "Crafts", "Fabric", "Design"],
    image: hoopArtImg,
  },
  {
    id: 2,
    title: "Editorial Muse",
    category: "Illustration",
    categoryId: "illustration",
    description: "An editorial illustration inspired by confidence, glamour and individuality.",
    tools: ["Photoshop", "Illustrator", "Procreate"],
    image: illustrationImg,
  },
  {
    id: 3,
    title: "Brand Identity",
    category: "Logo Design",
    categoryId: "logo",
    description: "Crafting memorable brand identities through strategic design, refined typography, and purposeful visual storytelling.",
    tools: ["Illustrator", "Photoshop", "Brand Strategy"],
    image: logoBg,
  },
  {
    id: 4,
    title: "Eco Campaign",
    category: "Social Media",
    categoryId: "social",
    description: "Social media marketing materials for a sustainable living awareness campaign.",
    tools: ["Figma", "Illustrator"],
    image: socialImg,
  }
];
