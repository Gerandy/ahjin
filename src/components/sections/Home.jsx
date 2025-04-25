import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent leading-right">
            Welcome to the Ahjin Guild
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            We are 3rd year BSIT IT students currently studying at the Cavite State University Imus Campus We made this Simple react js website 
            for you to see our progress as an students and to contact us whenever you need us and see our projects as well.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Us
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};