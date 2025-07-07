import { Navbar } from "@/components/ui/navbar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <Navbar />
      <main className="flex items-center justify-center min-h-[calc(100vh-88px)]">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 text-white">404</h1>
          <p className="text-xl text-gray-300 mb-8">Oops! Page not found</p>
          <a
            href="/"
            className="px-8 py-3 bg-navbar-logo text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-200 inline-block"
          >
            Return to Home
          </a>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
