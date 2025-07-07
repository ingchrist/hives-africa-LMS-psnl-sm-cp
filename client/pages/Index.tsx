import { Navbar } from "@/components/ui/navbar";
import { DemoResponse } from "@shared/api";
import { useEffect, useState } from "react";

export default function Index() {
  const [exampleFromServer, setExampleFromServer] = useState("");

  useEffect(() => {
    fetchDemo();
  }, []);

  const fetchDemo = async () => {
    try {
      const response = await fetch("/api/demo");
      const data = (await response.json()) as DemoResponse;
      setExampleFromServer(data.message);
    } catch (error) {
      console.error("Error fetching hello:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <Navbar />
      <main className="flex items-center justify-center min-h-[calc(100vh-88px)]">
        <div className="text-center max-w-2xl mx-auto px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-navbar-logo">HACKRIFT</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Building the future of technology, one innovation at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-navbar-logo text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-200">
              Get Started
            </button>
            <button className="px-8 py-3 border border-gray-400 text-gray-300 font-semibold rounded-lg hover:bg-white/10 transition-all duration-200">
              Learn More
            </button>
          </div>
          {exampleFromServer && (
            <p className="mt-8 text-sm text-gray-400">{exampleFromServer}</p>
          )}
        </div>
      </main>
    </div>
  );
}
