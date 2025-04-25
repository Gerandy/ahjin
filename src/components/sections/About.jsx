import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkillsGerandy = [
    "React",
    "TailWindCSS",
    "TypeScript",
    "Html",
    "CSS",
    "Bootstrap",
    
  ];

  const backendSkillsGerandy = ["Node.js", "Python", "Java", "Java Script", "MySQL", "C++"];

  const frontendSkillsErwin = [
    "React",
    "TailWindCSS",
    "Html",
    "CSS",
    "Bootstrap",
  ];

  const backendSkillsErwin = ["Python","Java","Java Script","MySQL","C++","Node.JS"];

  const frontendSkillsCj = [
    "React",
    "HTML",
    "CSS",
    "Bootstrap CSS",
  ];

  const backendSkillsCj = ["Node.js", "Python", "Java"];

  const frontendSkillsNoer = [
    "React",
    "HTML",
    "CSS",
  ];

  const backendSkillsNoer = ["JavaScript", "Node.js"];

  const frontendSkillsReween = [
    "HTML",
    "CSS",
    "Bootstrap CSS",
    "React.js",
  ];

  const backendSkillsReween = ["Node.js", "Python", "JavaScript"];

  return (
    <div className="=bg-green-900">
      <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent text-center">
              {" "}
              About Us
            </h2>

            {/*======================================1ST USER=========================================================*/}
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <div className="flex items-center">
                <img className=" h-40 w-40 mr-5 rounded-[100px] border-3 border-solid border-purple-600" src="src/assets/gerandy profile.jpg"> 
                </img>
                  <p className="mt-6 text-[30px] font-bold mb-8 bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent text-center">
                    Gerandy Ernest J. Buensuceso
                    <img src=""></img>
                  </p>
              </div>
              <br></br>
              <div>Connect with me 
                 <a href="https://www.facebook.com/gerandy.buensuceso" className="ml-3 ">
                      <button
                        type="button" className="  hover:scale-110 px-2 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                          <img src="/assets/1.png" alt="fb" className="mb-2 inline-block rounded h-8 w-8 hover:shadow-[0_2px_8px_rgba(192,132,252,0.4)]"/>
                      </button>
                  </a>
                  <a href="https://www.instagram.com/_luvsato/">
                      <button
                        type="button" className="  hover:scale-110 px-2 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                          <img src="src/assets/2.png" alt="ig" className="mb-2 inline-block rounded h-8 w-8 hover:shadow-[0_2px_8px_rgba(192,132,252,0.4)]"/>
                      </button>
                  </a>
              </div>
              
              <p className="text-gray-300 mb-6">
              Hey! I’m a 20-year-old IT student from Kawit, Cavite, currently in my 3rd year at CvSU Imus. Most days, you’ll find me wrestling with code, surviving on caffeine, and pretending I totally understand what the compiler is trying to tell me. I’m passionate about tech, curious about how things work, and always down to learn something new—even if it means a few mental breakdowns along the way. This portfolio is where I keep all the cool (and sometimes chaotic) stuff I’ve worked on. Take a look around!


              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {frontendSkillsGerandy.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                      hover:shadow-[0_2px_8px_rgba(192,132,252,0.4)] transition
                      "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4"> Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {backendSkillsGerandy.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                      hover:shadow-[0_2px_8px_rgba(192,132,252,0.4)] transition
                      "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:shadow-[0_2px_8px_rgba(168,85,247,0.9)]">
                <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                    <strong> Batong Dalig Elementary School</strong> - Elementary
                    (2010-2016)
                  </li>
                  <li>
                    <strong> Emiliano Tria Tirona Memorial Integrated High School </strong> - High School
                    (2016-2020)
                  </li>
                  <li>
                    <strong> Emiliano Tria Tirona Memorial Integrated High School </strong> - Senior High
                    (2020-2022)
                  </li>
                  <li>
                    <strong> Cavite State University - Imus Campus </strong> - College 
                    (2022- present) 
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:shadow-[0_2px_8px_rgba(168,85,247,0.9)]">
                <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold">
                      Mcdonalds (2023 - 2023)
                    </h4>
                    <p>
                      Cooks expertly and efficiently in a fast-paced environment.
                    </p>
                  </div>

                  
                </div>
              </div>
            </div>

              
            </div><br></br>
            
            
            {/*======================================2ND USER=========================================================*/}
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
              <div className="flex items-center">
                <img className="  h-40 w-40 mr-5 rounded-[100px] border-3 border-solid border-purple-600" src="src/assets/erwinProfile.png">
                </img>
                  <p className="mt-6 text-[30px] font-bold mb-8 bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent text-center">
                    Erwin M. Vallez
                  </p>
              </div><br></br>
              <div>Connect with me 
                 <a href="https://www.facebook.com/Weweeeng" className="ml-3 ">
                      <button
                        type="button" className="  hover:scale-110 px-2 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                          <img src="src/assets/1.png" alt="fb" className="mb-2 inline-block rounded h-8 w-8 hover:shadow-[0_2px_8px_rgba(192,132,252,0.4)]"/>
                      </button>
                  </a>
                  <a href="https://www.instagram.com/_weweeeng/">
                      <button
                        type="button" className="  hover:scale-110 px-2 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                          <img src="src/assets/2.png" alt="ig" className="mb-2 inline-block rounded h-8 w-8 hover:shadow-[0_2px_8px_rgba(192,132,252,0.4)]"/>
                      </button>
                  </a>
              </div>
              <p className="text-gray-300 mb-6">
                Student from Bachelor of Science in Information Technology who's living a simple and humble life that is driven by the dream of becoming successful in my chosen field. I believe in working hard, staying focused, and enjoying the small things along the way. Admiring that one day not to be just successful, but also to have a peaceful and fulfilling life that's free from stress. With each step I take, I'm getting closer to the future I've always dreamed of.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {frontendSkillsErwin.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                      hover:shadow-[0_2px_8px_rgba(192,132,252,0.4)] transition
                      "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4"> Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {backendSkillsErwin.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                      hover:shadow-[0_2px_8px_rgba(192,132,252,0.4)] transition
                      "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:shadow-[0_2px_8px_rgba(168,85,247,0.9)]">
                <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                    <strong> Pamplona Elementary School Central Las Piñas City </strong> - Elementary
                    (2010-2016)
                  </li>
                  <li>
                    <strong> Las Piñas East National Highschool (Verdant) </strong> - High School
                    (2016-2020)
                  </li>
                  <li>
                    <strong> General Pantaleon Garcia Senior High School </strong> - Senior High
                    (2020-2022)
                  </li>
                  <li>
                    <strong> Cavite State University - Imus Campus </strong> - College 
                    (2022-present)
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:shadow-[0_2px_8px_rgba(168,85,247,0.9)]">
                <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold">
                    <li>Student</li>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            </div><br></br>

            {/*======================================3RD USER=========================================================*/}
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <div className="flex items-center">
                <img className="  h-40 w-40 mr-5 rounded-[100px] border-3 border-solid border-purple-600" src="src/assets/john profile.jpg">
                </img>
                  <p className="mt-6 text-[30px] font-bold mb-8 bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent text-center">
                    John Car Michael D. Delos Reyes
                  </p>
              </div><br></br>
              <div>Connect with me 
                 <a href="https://www.facebook.com/profile.php?id=100069194364309" className="ml-3 ">
                      <button
                        type="button" className="  hover:scale-110 px-2 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                          <img src="src/assets/1.png" alt="fb" className="mb-2 inline-block rounded h-8 w-8 hover:shadow-[0_2px_8px_rgba(192,132,252,0.4)]"/>
                      </button>
                  </a>
                  <a href="#ig">
                      <button
                        type="button" className="  hover:scale-110 px-2 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                          <img src="src/assets/2.png" alt="ig" className="mb-2 inline-block rounded h-8 w-8 hover:shadow-[0_2px_8px_rgba(192,132,252,0.4)]"/>
                      </button>
                  </a>
              </div>
              <p className="text-gray-300 mb-6">
              I'm John Car Michael D. Delos Reyes, an IT student who is someone studying the principles and tools related to computer systems, networks, software, and data management. i believe being an IT is hard but with my dream of becoming a future game developer, i will pursue my dream to become a succesfull game dev and to learn more about the IT industry.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {frontendSkillsCj.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                      hover:shadow-[0_2px_8px_rgba(192,132,252,0.4)] transition
                      "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4"> Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {backendSkillsCj.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                      hover:shadow-[0_2px_8px_rgba(192,132,252,0.4)] transition
                      "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:shadow-[0_2px_8px_rgba(168,85,247,0.9)]">
                <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong> St. Thomas Aquinas Academy </strong> - Elementary
                    (2010-2016)
                  </li>
                  <li>
                    <strong> St. Matthew Academy of Cavite </strong> - High School
                    (2016-2020)
                  </li>
                  <li>
                    <strong> St. Matthew Academy of Cavite </strong> - Senior High
                    (2020-2022)
                  </li>
                  <li>
                    <strong> Cavite State University - Imus Campus </strong> - College 
                    (2022-present)
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:shadow-[0_2px_8px_rgba(168,85,247,0.9)]">
                <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold">
                      <li>Student</li>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            </div><br></br>

            {/*======================================4TH USER=========================================================*/}
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <div className="flex items-center">
                <img className=" h-40 w-40 mr-5 rounded-[100px] border-3 border-solid border-purple-600" src="src/assets/noer profile.png">
                </img>
                  <p className="mt-6 text-[30px] font-bold mb-8 bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent text-center">
                    Noer Jan C. Cleofe
                  </p>
              </div><br></br>
              <div>Connect with me 
                 <a href="https://www.facebook.com/noer.jan.2024" className="ml-3 ">
                      <button
                        type="button" className="  hover:scale-110 px-2 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                          <img src="src/assets/1.png" alt="fb" className="mb-2 inline-block rounded h-8 w-8 hover:shadow-[0_2px_8px_rgba(192,132,252,0.4)]"/>
                      </button>
                  </a>
                  <a href="https://www.instagram.com/injecleofe/">
                      <button
                        type="button" className="  hover:scale-110 px-2 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                          <img src="src/assets/2.png" alt="ig" className="mb-2 inline-block rounded h-8 w-8 hover:shadow-[0_2px_8px_rgba(192,132,252,0.4)]"/>
                      </button>
                  </a>
              </div>
              <p className="text-gray-300 mb-6">
              Im an IT student who's still learning the fundamentals of coding.  Even if I might not be an expert just yet, I'm willing to develop and advance my abilities. I like experimenting with new technologies, figuring out issues, and coming up with creative fixes that simplify daily chores and I welcome any difficulties that may help me improve gradually.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {frontendSkillsNoer.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                      hover:shadow-[0_2px_8px_rgba(192,132,252,0.4)] transition
                      "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4"> Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {backendSkillsNoer.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                      hover:shadow-[0_2px_8px_rgba(192,132,252,0.4)] transition
                      "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:shadow-[0_2px_8px_rgba(168,85,247,0.9)]">
                <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong> Dasmariñas II Central Elementary School </strong> - Elememtary
                    (2009 - 2015)
                  </li>
                  <li>
                    <strong> Dasmariñas Integrated High School </strong> - High School
                    (2015 - 2019)
                  </li>
                  <li>
                    <strong> Dasmariñas Integrated High School  </strong> - Senior High
                    (2019 - 2021)
                  </li>
                  <li>
                    <strong> Cavite State University-Imus Campus  </strong> - College
                    (2021 - present)
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:shadow-[0_2px_8px_rgba(168,85,247,0.9)]">
                <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold">
                    <li> Student </li>
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            </div><br></br>

            {/*======================================5TH USER=========================================================*/}
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <div className="flex items-center">
                <img className=" h-40 w-40 mr-5 rounded-[100px] border-3 border-solid border-purple-600" src="src/assets/reween profile.jpg">
                </img>
                  <p className="mt-6 text-[30px] font-bold mb-8 bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent text-center">
                    Reween O. Rambonanza
                  </p>
              </div><br></br>
              <div>Connect with me 
                 <a href="https://www.facebook.com/reween.rambonanza" className="ml-3 ">
                      <button
                        type="button" className="  hover:scale-110 px-2 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                          <img src="src/assets/1.png" alt="fb" className="mb-2 inline-block rounded h-8 w-8 hover:shadow-[0_2px_8px_rgba(192,132,252,0.4)]"/>
                      </button>
                  </a>
                  <a href="https://www.instagram.com/rwnrambonanza/">
                      <button
                        type="button" className="  hover:scale-110 px-2 py-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                          <img src="src/assets/2.png" alt="ig" className="mb-2 inline-block rounded h-8 w-8 hover:shadow-[0_2px_8px_rgba(192,132,252,0.4)]"/>
                      </button>
                  </a>
              </div>
              <p className="text-gray-300 mb-6">
              Hello, I'm Reween Rambonanza an aspiring IT currently pursuing my studies in Information Technology. I'm eager about learning how technology works and how it can be used to solve real-world problems. Although I'm still gaining experience, I’m also  exploring areas like web development, frame works such as reactJS, vue, also other fundamental in backend and I enjoy experimenting with new tools and technologies. I believe in continuous learning, and I'm always looking for opportunities to grow, improve my skills, and contribute to meaningful tech projects.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {frontendSkillsReween.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                      hover:shadow-[0_2px_8px_rgba(192,132,252,0.4)] transition
                      "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4"> Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {backendSkillsReween.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                      hover:shadow-[0_2px_8px_rgba(192,132,252,0.4)] transition
                      "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:shadow-[0_2px_8px_rgba(168,85,247,0.9)]">
                <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong> Pintong Gubat Elementary School </strong> - Elementary
                    (2010-2016)
                  </li>
                  <li>
                    <strong> Paliparan National High School </strong> - High School
                    (2016-2020)
                  </li>
                  <li>
                    <strong> Paliparan 3 Senior Highschool </strong> - Senior High 
                    (2020-2022)
                  </li>
                  <li>
                    <strong> Cavite State University - Imus Campus </strong> - College
                    (2022-present)
                  </li>

                </ul>
              </div>
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:shadow-[0_2px_8px_rgba(168,85,247,0.9)]">
                <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold">
                      <li>Elementary tutor</li>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            </div><br></br>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
};