import About from "@/components/home/About";
import Header from "@/components/home/Header";
import Projects from "@/components/home/Projects";
import Resume from "@/components/home/Resume";
import {Contact } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono">
      {/* Header */}
      <header className="border-b-4 border-green-400 p-4 md:p-6">
        <div className="max-w-6xl mx-auto">
          <div className="border-2 border-white p-3 md:p-4 mb-4">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">OZNUR OZNUR</h1>
            <p className="text-base md:text-xl text-green-400">
              SOFTWARE DEVELOPER
            </p>
          </div>
          <Header />
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="border-b-4 border-green-400 p-6">
      <About/>
      </section>

      {/* Projects Section */}
      <section id="projects" className="border-b-4 border-green-400 p-6">
      <Projects/>
      </section>

      {/* Resume Section */}
      <section id="resume" className="border-b-4 border-green-400 p-6">
        <Resume />
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-6">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-green-400 p-6 text-center">
        <p className="text-green-400">© 2025 OZNUR OZNUR</p>
      </footer>
    </div>
  );
}
