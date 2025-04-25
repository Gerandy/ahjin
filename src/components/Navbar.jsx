import { useEffect } from "react"


export const Navbar = ({menuOpen, setMenuOpen}) => {

  useEffect(() => {
     document.body.style.overflow = menuOpen ? "hidden" : ""
  }, [menuOpen])

    return(
        <nav className="fixed top-0 w-full z-40 bg-[rgba(8, 0, 0, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-xl font-bold text-white">
                    {" "}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center group cursor-pointer">
                          <img className="h-12 w-12 mr-2 group-hover:scale-105" src="assets/ahjinLogo-43SbPtHB.png" alt="logo" />
                          <span className="text-gray-300 group-hover:text-purple-500 transition-colors duration-400 group-hover:scale-105 mr-1">Ahjin</span>
                          <span className="text-purple-500 group-hover:text-gray-300 transition-colors duration-400 group-hover:scale-105">.guild</span>
                        </div>
                    </div>                
                </a>
                <div className="w-7 h5 relative cursor-pointer z-40 md:hidden hover:scale-110" onClick={() => setMenuOpen((prev) => !prev)}>
                  &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-8">
                  <a href="#home" className="relative text-gray-300 hover:text-purple-400 transition-colors hover:scale-110 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-400 after:transition-all after:duration-100 hover:after:w-full">
                    {""}
                    Home{""}
                  </a>
                  <a href="#about" className="relative text-gray-300 hover:text-purple-400 transition-colors hover:scale-110 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-400 after:transition-all after:duration-100 hover:after:w-full">
                    {""}
                    About{""}
                  </a>
                  <a href="#projects" className="relative text-gray-300 hover:text-purple-400 transition-colors hover:scale-110 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-400 after:transition-all after:duration-100 hover:after:w-full">
                    {""}
                    Project{""}
                  </a>
                  <a href="#contact" className="relative text-gray-300 hover:text-purple-400 transition-colors hover:scale-110 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-400 after:transition-all after:duration-100 hover:after:w-full">
                    {""}
                    Contacts{""}
                  </a>
                </div>
            </div>
          </div>
        </nav>
    ) 
}