import { motion } from "framer-motion";
import { staggerParent } from "../../animations/variants";
import ContactCard from "./ContactCard";

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 4l8 5 8-5V6l-8 5-8-5v2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S-.02 4.88-.02 3.5 1.1 1 2.48 1s2.5 1.12 2.5 2.5zM.22 8h4.5v14H.22V8zm7.6 0h4.3v2h.06c.6-1.13 2.07-2.32 4.26-2.32C20.94 7.68 22 10.1 22 13.6V22h-4.5v-7.4c0-1.77-.04-4.05-2.46-4.05-2.46 0-2.84 1.92-2.84 3.92V22h-4.5V8z" />
  </svg>
);

const CONTACTS = [
  {
    label: "Phone",
    value: "+91 6263672767",
    href: "tel:+916263672767",
    icon: <PhoneIcon />,
    accent: "#FF9F43",
  },
  {
    label: "Email",
    value: "pandaprakriti@gmail.com",
    href: "mailto:pandaprakriti@gmail.com",
    icon: <MailIcon />,
    accent: "#FF4D8D",
  },
  {
    label: "LinkedIn",
    value: "in/prakriti-panda",
    href: "https://linkedin.com/in/prakriti-panda",
    icon: <LinkedInIcon />,
    accent: "#7F5AF0",
    isExternal: true,
  },
];

const SocialLinks = () => {
  return (
    <motion.div
      variants={staggerParent(0.08, 0.15)}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-2.5"
    >
      {CONTACTS.map((c) => (
        <ContactCard key={c.label} {...c} />
      ))}
    </motion.div>
  );
};

export default SocialLinks;
