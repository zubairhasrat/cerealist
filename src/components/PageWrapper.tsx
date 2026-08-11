import Masthead from "./Masthead";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
  outerClassName?: string;
  outerStyle?: React.CSSProperties;
}

export default function PageWrapper({ children, className = "", outerClassName = "", outerStyle }: PageWrapperProps) {
  return (
    <div className={`flex flex-col min-h-screen ${outerClassName}`} style={outerStyle}>
      <Masthead />
      <NavBar />
      <main className={`flex-1 w-full ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
