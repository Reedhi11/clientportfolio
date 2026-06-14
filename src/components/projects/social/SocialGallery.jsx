import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, MessageCircle, Send, Bookmark } from "lucide-react";

// Import all 18 images
import img1 from "../../../assets/socialmedia/3 social media.jpg";
import img2 from "../../../assets/socialmedia/390.jpg";
import img3 from "../../../assets/socialmedia/Harry Potter (1).jpg";
import img4 from "../../../assets/socialmedia/Physicians.jpeg";
import img5 from "../../../assets/socialmedia/Save water.jpeg";
import img6 from "../../../assets/socialmedia/digital addiction.jpeg";
import img7 from "../../../assets/socialmedia/mother post 3.jpg";
import img8 from "../../../assets/socialmedia/obesity.jpeg";
import img9 from "../../../assets/socialmedia/sm post 1.jpg";
import img10 from "../../../assets/socialmedia/WhatsApp Image 2024-07-31 at 4.53.51 PM.jpeg";
import img11 from "../../../assets/socialmedia/WhatsApp Image 2024-10-03 at 11.34.20 PM.jpeg";
import img12 from "../../../assets/socialmedia/pals.jpeg";
import img13 from "../../../assets/socialmedia/tarus 2 wheeler.jpg";
import img14 from "../../../assets/socialmedia/taurus bike change.jpg";
import img15 from "../../../assets/socialmedia/taurus business loan new.jpg";
import img16 from "../../../assets/socialmedia/taurus car loan.jpg";
import img17 from "../../../assets/socialmedia/taurus debtb new.jpg";
import img18 from "../../../assets/socialmedia/taurus doc new chnages.jpg";

const categories = ["All", "Taurus Finance", "Healthcare", "Events & Campaigns", "Miscellaneous"];

const posts = [
  // Taurus Finance
  { img: img13, title: "2 Wheeler Loan", category: "Taurus Finance" },
  { img: img14, title: "Bike Exchange", category: "Taurus Finance" },
  { img: img15, title: "Business Loan", category: "Taurus Finance" },
  { img: img16, title: "Car Loan", category: "Taurus Finance" },
  { img: img17, title: "Debt Management", category: "Taurus Finance" },
  { img: img18, title: "Documentation", category: "Taurus Finance" },

  // Healthcare
  { img: img4, title: "Physicians Outreach", category: "Healthcare" },
  { img: img5, title: "Save Water Initiative", category: "Healthcare" },
  { img: img6, title: "Digital Addiction", category: "Healthcare" },
  { img: img8, title: "Obesity Awareness", category: "Healthcare" },
  { img: img12, title: "PALS Support", category: "Healthcare" },

  // Events & Campaigns
  { img: img1, title: "Marketing Strategy", category: "Events & Campaigns" },
  { img: img2, title: "Promotional Event", category: "Events & Campaigns" },
  { img: img3, title: "Harry Potter Theme", category: "Events & Campaigns" },
  { img: img7, title: "Mother's Day Special", category: "Events & Campaigns" },
  { img: img9, title: "Product Launch", category: "Events & Campaigns" },

  // Miscellaneous
  { img: img10, title: "Campaign Update 1", category: "Miscellaneous" },
  { img: img11, title: "Campaign Update 2", category: "Miscellaneous" },
];

const PostCard = ({ post, idx, onClick }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay: (idx % 12) * 0.05 }}
    onClick={onClick}
    className="relative w-full rounded-2xl overflow-hidden group cursor-pointer shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-gray-200 bg-white flex flex-col"
  >
    {/* Top Bar */}
    <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 z-20">
      <span className="font-['Dancing_Script',_cursive] text-[1.4rem] leading-none font-bold text-gray-800 tracking-tight">
        Instagram
      </span>
      <div className="flex items-center gap-4 text-gray-500">
        <Heart size={20} strokeWidth={2} />
        <MessageCircle size={20} strokeWidth={2} />
      </div>
    </div>

    {/* Image container */}
    <div className="relative w-full aspect-square overflow-hidden bg-gray-50">
      <img
        src={post.img}
        alt={post.title}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
        loading="lazy"
      />

      {/* Hover overlay for title & category */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-center items-center p-4 text-center">
        <span className="px-3 py-1 bg-[#FF4D8D] text-white text-[10px] font-bold uppercase tracking-wider rounded-full mb-3 shadow-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {post.category}
        </span>
        <span className="text-white font-bold text-lg tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 drop-shadow-md">
          {post.title}
        </span>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 z-20">
      <div className="flex items-center gap-4 text-gray-600">
        <Heart size={22} className="fill-red-500 text-red-500" strokeWidth={1.5} />
        <MessageCircle size={22} strokeWidth={1.5} className="hover:text-gray-900 transition-colors" />
        <Send size={22} strokeWidth={1.5} className="hover:text-gray-900 transition-colors transform rotate-[18deg] -translate-y-[2px]" />
      </div>
      <Bookmark size={22} strokeWidth={1.5} className="text-gray-600 hover:text-gray-900 transition-colors" />
    </div>
  </motion.div>
);

const SocialGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedPost]);

  const filteredPosts = activeCategory === "All"
    ? posts
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-0">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 w-full relative z-20">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm ${activeCategory === cat
              ? "bg-gradient-to-r from-[#FF4D8D] to-[#FF9F43] text-white shadow-pink-200 transform -translate-y-1"
              : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Content Wrapper */}
      <div className="w-full">
        {/* The Grid Wrapper */}
        <div className="w-full relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {/* Mobile: 1 Column */}
              <div className="grid sm:hidden grid-cols-1 gap-6 w-full">
                {filteredPosts.map((post, idx) => (
                  <PostCard key={`mob-${post.title}-${idx}`} post={post} idx={idx} onClick={() => setSelectedPost(post)} />
                ))}
              </div>

              {/* Tablet: 2 Columns */}
              <div className="hidden sm:grid lg:hidden grid-cols-2 gap-6 w-full">
                {filteredPosts.map((post, idx) => (
                  <PostCard key={`tab-${post.title}-${idx}`} post={post} idx={idx} onClick={() => setSelectedPost(post)} />
                ))}
              </div>

              {/* Desktop: 3 Columns */}
              <div className="hidden lg:grid xl:hidden grid-cols-3 gap-6 w-full">
                {filteredPosts.map((post, idx) => (
                  <PostCard key={`desk-${post.title}-${idx}`} post={post} idx={idx} onClick={() => setSelectedPost(post)} />
                ))}
              </div>

              {/* Large Desktop: 4 Columns */}
              <div className="hidden xl:grid grid-cols-4 gap-6 w-full">
                {filteredPosts.map((post, idx) => (
                  <PostCard key={`lgdesk-${post.title}-${idx}`} post={post} idx={idx} onClick={() => setSelectedPost(post)} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Full Screen Image Modal using React Portal to escape stacking context */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedPost && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
              {/* Backdrop */}
              <motion.div
                aria-hidden
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedPost(null)}
                className="fixed inset-0 z-[9990] bg-[#1a1a2e]/55 backdrop-blur-md pointer-events-auto cursor-pointer"
              >
                {/* Soft colored glows behind the modal for premium focus */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(40% 40% at 30% 35%, rgba(127,90,240,0.35) 0%, transparent 60%), radial-gradient(35% 35% at 70% 65%, rgba(255,77,141,0.30) 0%, transparent 60%), radial-gradient(30% 30% at 50% 100%, rgba(255,159,67,0.25) 0%, transparent 60%)",
                  }}
                />
              </motion.div>

              {/* Modal Content container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 12 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="pointer-events-auto relative w-full max-w-4xl z-[9999] flex justify-center items-center"
              >
                <div className="relative inline-flex justify-center items-center">
                  {/* CLOSE BUTTON */}
                  <button
                    type="button"
                    onClick={() => setSelectedPost(null)}
                    aria-label="Close"
                    className="absolute -top-4 -right-4 md:-right-12 md:-top-0 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white hover:bg-white hover:text-black hover:rotate-90 transition-all duration-300 shadow-lg"
                  >
                    <X size={20} strokeWidth={2.4} />
                  </button>

                  {/* Image Content - Clean without glass card */}
                  <img
                    src={selectedPost.img}
                    alt={selectedPost.title}
                    className="w-full h-auto max-h-[85vh] object-contain shadow-2xl rounded-sm"
                  />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}

    </div>
  );
};

export default SocialGallery;
