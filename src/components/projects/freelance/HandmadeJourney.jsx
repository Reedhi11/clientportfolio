import React from 'react';
import { motion } from 'framer-motion';
import denimBandImg from '../../../assets/freelance/denim choker.jpeg';
import hoopArtImg from '../../../assets/freelance/wedding hoop.jpeg';
import invitationImg from '../../../assets/freelance/Trini & Rixon.jpg';
import hairBandImg from '../../../assets/freelance/hairband.jpeg';

const CHAPTERS = [
  {
    id: '01',
    title: 'Custom Handmade Denim Choker & Bracelet Set',
    subtitle: 'Denim Set',
    desc: 'A handcrafted denim accessory set featuring intricately placed mirrors, cowrie shells, and metallic beads. Designed to blend bohemian charm with contemporary fashion, this unique choker and bracelet duo showcases detailed craftsmanship, texture, and upcycled-inspired aesthetics, making it a standout statement piece.',
    materials: ['Denim', 'Shells', 'Mirrors', 'Pearls', 'Beads'],
    image: denimBandImg,
    note: 'Boho Charm 🤍',
    link: '#',
    rotation: '-rotate-2',
    imgRotation: 'rotate-1',
    align: 'left'
  },
  {
    id: '02',
    title: 'Personalized Embroidered Wedding Hoop Art',
    subtitle: 'Wedding Hoop Art',
    desc: 'A handcrafted wedding keepsake featuring embroidered floral motifs, custom lettering, and textured hair detailing. The artwork combines hand embroidery, fabric draping, and painted figure illustrations to create a unique and personalized representation of the couple, celebrating their special journey with elegance and craftsmanship.',
    materials: ['Embroidery', 'Silk Thread', 'Fabric', 'Beads'],
    image: hoopArtImg,
    note: 'Our Journey Begins',
    link: '#',
    rotation: 'rotate-2',
    imgRotation: '-rotate-1',
    align: 'right'
  },
  {
    id: '03',
    title: 'Wedding Reception Welcome Board',
    subtitle: 'Welcome Board',
    desc: 'An elegant wedding reception welcome board designed with soft floral illustrations, pastel hues, and refined typography. Featuring a romantic couple illustration framed with delicate botanical elements and geometric accents, the design creates a warm and sophisticated first impression, beautifully celebrating the couple\'s special day.',
    materials: ['Canva', 'Illustration', 'Typography', 'Floral Elements'],
    image: invitationImg,
    note: 'Elegant & Timeless',
    link: '#',
    rotation: '-rotate-1',
    imgRotation: 'rotate-2',
    align: 'left'
  },
  {
    id: '04',
    title: 'Victorian-Inspired Handmade Headband',
    subtitle: 'Handmade Headband',
    desc: 'A custom-crafted satin headband inspired by Victorian elegance, featuring delicate hand-embroidered ribbon roses, lustrous pearls, and intricate sequin embellishments. Designed with fine attention to detail, this statement accessory blends timeless sophistication with artisanal craftsmanship, making it perfect for special occasions and vintage-inspired styling.',
    materials: ['Fabric Flowers', 'Pearls', 'Beads', 'Wire'],
    image: hairBandImg,
    note: 'Made with love 🤍',
    link: '#',
    rotation: 'rotate-1',
    imgRotation: '-rotate-2',
    align: 'right'
  }
];

const HandmadeJourney = () => {
  return (
    <div className="max-w-6xl mx-auto relative px-4 md:px-0 md:pl-[160px]">
      
      {/* Global Vertical Line */}
      <motion.div 
        initial={{ height: 0, x: "-50%" }}
        whileInView={{ height: '100%', x: "-50%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="hidden md:block absolute top-0 left-[80px] w-px border-l-2 border-dashed border-[#FF4D8D]/30 -z-10"
      />
      
      {/* "CHAPTERS" Header on Timeline */}
      <motion.div 
        initial={{ opacity: 0, y: -20, x: "-50%" }}
        whileInView={{ opacity: 1, y: 0, x: "-50%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex absolute top-0 left-[80px] flex-col items-center bg-[#FDF9F1] py-4 px-2 z-10"
      >
        <h3 className="text-[#FF4D8D] font-bold tracking-widest text-sm">CHAPTERS</h3>
      </motion.div>

      {/* Main Content - Scrapbook Cards */}
      <div className="flex flex-col gap-16 pb-8 md:pb-12 pt-8">
        {CHAPTERS.map((chap, index) => (
          <motion.div 
            key={chap.id} 
            id={`chapter-${chap.id}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${chap.align === 'right' ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Timeline Marker for this Chapter */}
            <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-[-160px] w-[160px] flex-col items-center z-10">
              <div className="w-10 h-10 rounded-full border-2 border-[#FF4D8D] bg-[#FDF9F1] flex items-center justify-center text-[#FF4D8D] font-bold text-sm mb-2 shadow-sm">
                {chap.id}
              </div>
              <span className="text-xs font-semibold text-gray-600 text-center w-24 leading-tight">{chap.subtitle}</span>
            </div>

            {/* Image Side - Polaroid Effect */}
            <div className={`relative w-full lg:w-[55%] ${chap.rotation}`}>
              {/* Scrapbook background piece */}
              <div className="absolute inset-0 bg-[#F4ECD8] shadow-md transform scale-105 rounded-sm border border-[#E2D5C3]"></div>
              
              {/* Tape top */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/60 backdrop-blur-sm shadow-[0_1px_3px_rgba(0,0,0,0.1)] -rotate-3 z-20"></div>

              {/* The Photo */}
              <div className="relative bg-white p-3 pb-12 shadow-xl z-10">
                <img 
                  src={chap.image} 
                  alt={chap.title} 
                  className={`w-full aspect-[4/3] object-contain bg-gray-50 border border-gray-200 ${chap.imgRotation}`} 
                />
                
                {/* Handwritten Note on Polaroid */}
                <div className="absolute bottom-3 right-6 transform -rotate-2">
                  <p className="font-['Caveat',_cursive] text-2xl text-gray-800">{chap.note}</p>
                </div>
              </div>

              {/* Random floating elements (Paperclip) */}
              {index % 2 === 0 && (
                <div className="absolute -top-6 -left-4 z-30 transform rotate-45 opacity-70">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                    <path d="M10.38 18.7a4.4 4.4 0 0 0 6.24-6.23L9.55 5.4a2.9 2.9 0 0 0-4.1 4.1l7.07 7.07"></path>
                  </svg>
                </div>
              )}
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-[45%] flex flex-col justify-center">
              <span className="text-[#FF4D8D] font-bold text-xs tracking-widest uppercase mb-3">
                CHAPTER {chap.id}
              </span>
              <h2 className="text-3xl md:text-4xl font-['Playfair_Display',_serif] text-[#2C2C2C] mb-4 leading-tight flex items-center gap-2">
                {chap.title}
                <span className="text-[#FF4D8D] font-light text-2xl ml-2">♡</span>
              </h2>
              
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 font-light">
                {chap.desc}
              </p>

              <div className="mb-8">
                <p className="font-['Dancing_Script',_cursive] text-[#FF4D8D] text-xl mb-3">Materials Used</p>
                <div className="flex flex-wrap gap-2">
                  {chap.materials.map(mat => (
                    <span key={mat} className="px-3 py-1 bg-white border border-[#E2D5C3] rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Note on Timeline */}
      <motion.div 
        initial={{ opacity: 0, x: "-50%" }}
        whileInView={{ opacity: 1, x: "-50%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="hidden md:flex absolute bottom-0 left-[80px] w-40 flex-col items-center bg-[#FDF9F1] py-2 z-10"
      >
        <p className="font-['Dancing_Script',_cursive] text-xl text-gray-700 italic leading-tight">Made by hand,</p>
        <p className="font-['Dancing_Script',_cursive] text-xl text-gray-700 italic leading-tight">made with heart.</p>
        <div className="mt-2 text-[#FF4D8D]">♡</div>
      </motion.div>
    </div>
  );
};

export default HandmadeJourney;
