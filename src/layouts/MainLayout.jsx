import Navbar from "../components/Navbar";
import CursorGlow from "../components/CursorGlow";

const MainLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-brand-cream text-brand-dark">
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">{children}</main>
    </div>
  );
};

export default MainLayout;
