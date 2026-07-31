import Masthead from "./Masthead";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageWrapper({ children, className = "" }: PageWrapperProps) {
  return (
    <div className="flex flex-col min-h-screen bg-paper">
      <Masthead />
      <NavBar />
      <main className={`flex-1 w-full ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
