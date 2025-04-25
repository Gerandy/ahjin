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
                    <div className="flex justify-between items-center"><img className="h-12 w-12 mr-2" src="src/assets/ahjinLogo.png"></img>Ahjin<span className="text-purple-500">.guild</span></div>                
                </a>
                <div className="w-7 h5 relative cursor-pointer z-40 md:hidden hover:scale-110" onClick={() => setMenuOpen((prev) => !prev)}>
                  &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-8">
                  <a href="#home" className="text-gray-300 hover:text-purple-400 transition-colors hover:scale-110">
                    {""}
                    Home{""}
                  </a>
                  <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors hover:scale-110">
                    {""}
                    About{""}
                  </a>
                  <a href="#projects" className="text-gray-300 hover:text-purple-400 transition-colors hover:scale-110">
                    {""}
                    Project{""}
                  </a>
                  <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors hover:scale-110">
                    {""}
                    Contacts{""}
                  </a>
                </div>
            </div>
          </div>
        </nav>
    ) 
}