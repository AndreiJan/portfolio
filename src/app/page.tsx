'use client';
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react';

// Scroll direction hook
function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState('down');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollDir(y > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = y;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollDir;
}

// Fade section that uses direction
function FadeInSection({ children, scrollDirection }: { children: React.ReactNode; scrollDirection: string }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 1}
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const base = 'transition-all duration-700 ease-in-out';
  const visibleClass = 'opacity-100 translate-y-0';
  const hiddenDown = 'opacity-0 translate-y-10';  // fade up when scrolling down
  const hiddenUp = 'opacity-0 -translate-y-10';   // fade down when scrolling up

  return (
    <div
      ref={ref}
      className={`${base} ${visible ? visibleClass : scrollDirection === 'down' ? hiddenDown : hiddenUp}`}
    >
      {children}
    </div>
  );
}


export default function Home() {
  const scrollDir = useScrollDirection();
  return (
    <main className="">
      <div className=" overlay bg-[url('/profile_wallpaper.jpg')] bg-cover bg-center h-screen w-full flex justify-center items-center ">
        {/* Background section */}
        <div>
          <h1 className="text-2xl sm:text-5xl font-bold font-mono tracking-[.3em] ">ANDREI<br></br> MENDOZA</h1>
        </div>
      </div>

      <div className=" h-auto w-full bg-black text-white relative flex flex-col pt-10 sm:flex-row" >
        {/* Top fade overlay */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-black to-transparent z-10" />

        {/* Contact Icons */}
      <div className="sm:w-1/2">
        <div className="sticky top-30 bg-black flex flex-col justify-center text-center items-center p-4 sm:pt-30">
          <h1 className="text-xl sm:text-4xl font-mono text-white sticky top-0">
            ANDREI<br />MENDOZA
          </h1>
          <div className="flex justify-center items-center space-x-4">
            <a href='https://github.com/AndreiJan'><img src="/skills/icons8-github-96.png" className="w-16 h-16" /></a>
            <a href='https://www.linkedin.com/in/andrei-mendoza-74b3872a1'><img src="/skills/icons8-linkedin-96.png" className="w-16 h-16" /></a>
            <a href='https://www.instagram.com/andrei_jan_m'><img src="/skills/icons8-instagram-96.png" className="w-16 h-16" /></a>
          </div>
        </div>
      </div>
        {/* CONTENT SECTION */}
          <div className="space-y-10 p-17 pt-20 w-full">
    
            
            
            
            <div className="text-lg" >

              <FadeInSection scrollDirection={scrollDir}>
                <p></p>
              </FadeInSection>
            </div>
            <FadeInSection scrollDirection={scrollDir}>
              <h1 className="text-2xl pb-2 font-bold font-mono tracking-[.3em]">About Me</h1>
              <p className="text-1xl text-white">I am an aspiring full-stack developer with a passion for all things relating to tech. I enjoy building websites, solving complex problems and constantly exploring new tools and technologies. Whether it's front-end design or back-end logic, I love taking on projects that challenge me to learn and grow as a developer. I'm always looking for opportunities to collaborate, improve my skils, and create something meaningful through code. </p>
            </FadeInSection>

            <div>
              <FadeInSection scrollDirection={scrollDir}>
                <h1 className="text-2xl pb-2 font-bold font-mono tracking-[.3em]">Experience</h1>
              </FadeInSection>
              <div className="space-y-6">

                <FadeInSection scrollDirection={scrollDir}>
                  <p>TAVANCA Network Inc. | IT Desktop Specialist<br></br>2025-present</p>
                </FadeInSection>

                <FadeInSection scrollDirection={scrollDir}>
                  <p>Freelance | Full-stack Website Development<br></br>2025-present</p>
                </FadeInSection>

              </div>
            </div>


            <div className="">
              <FadeInSection scrollDirection={scrollDir}>
                <h1 className="text-2xl pb-2">Skills</h1>

              </FadeInSection>

              <div className="space-y-9 sm:mr-50">
                  <div className="flex flex-col space-y-10">
                    
                    {/* Database */}
                    <FadeInSection scrollDirection={scrollDir}>
                      <div className="bg-zinc-900 p-6 text-center flex flex-col rounded-xl">
                        <div className="flex flex-wrap justify-center gap-6">
                          <img src="/skills/icons8-mongodb-96.png" className="w-15 h-15 sm:w-20 sm:h-20" alt="MongoDB" />
                          <img src="/skills/icons8-my-sql-96.png" className="w-15 h-15 sm:w-20 sm:h-20" alt="MySQL" />
                          <img src="/skills/icons8-firebase-96.png" className="w-15 h-15 sm:w-20 sm:h-20" alt="Firebase" />
                        </div>
                        <p className="mt-4 font-bold font-mono tracking-[.3em]">Database</p>
                      </div>
                    </FadeInSection>

                    <FadeInSection scrollDirection={scrollDir}>
                    {/* Framework */}
                      <div className="bg-zinc-900 p-6 text-center flex flex-col rounded-xl">
                        <div className="flex flex-wrap justify-center gap-6">
                          <img src="/skills/icons8-flask-96 (1).png" className="w-15 h-15 sm:w-20 sm:h-20" alt="Flask" />
                          <img src="/skills/icons8-next.js-96 (1).png" className="w-15 h-15 sm:w-20 sm:h-20" alt="Next.js" />
                          <img src="/skills/icons8-node-js-96.png" className="w-15 h-15 sm:w-20 sm:h-20" alt="Node.js" />
                          <img src="/skills/icons8-react-96.png" className="w-15 h-15 sm:w-20 sm:h-20" alt="React" />
                        </div>
                        <p className="mt-4 font-bold font-mono tracking-[.3em]">Framework</p>
                      </div>
                    </FadeInSection>

                    <FadeInSection scrollDirection={scrollDir}>

                    {/* Languages */}
                      <div className="bg-zinc-900 p-6 text-center flex flex-col rounded-xl">
                        <div className="flex flex-wrap justify-center gap-6">
                          <img src="/skills/icons8-python-96.png" className="w-15 h-15 sm:w-20 sm:h-20" alt="Python" />
                          <img src="/skills/icons8-java-96.png" className="w-15 h-15 sm:w-20 sm:h-20" alt="Java" />
                          <img src="/skills/icons8-javascript-96.png" className="w-15 h-15 sm:w-20 sm:h-20" alt="JavaScript" />
                          <img src="/skills/icons8-bash-96.png" className="w-15 h-15 sm:w-20 sm:h-20" alt="Bash" />
                        </div>
                        <p className="mt-4 font-bold font-mono tracking-[.3em]">Languages</p>
                      </div>

                    </FadeInSection>

                  <FadeInSection scrollDirection={scrollDir}>

                    <div className="bg-zinc-900 p-6 text-center flex flex-col rounded-xl">
                      <div className="flex flex-wrap justify-center gap-6">
                        <img src="/skills/icons8-ubuntu-96.png" className="w-15 h-15 sm:w-20 sm:h-20" alt="Python" />
                        <img src="/skills/icons8-mac-96.png" className="w-15 h-15 sm:w-20 sm:h-20" alt="Bash" />
                        <img src="/skills/icons8-windows-96.png" className="w-15 h-15 sm:w-20 sm:h-20" alt="Bash" />
                      </div>
                      <p className="mt-4 font-bold font-mono tracking-[.3em]">platforms</p>
                    </div>
                  </FadeInSection>
                  </div>
              </div>
           </div>

            <div>

              <FadeInSection scrollDirection={scrollDir}>
                <h1 className="text-2xl pb-2 font-bold font-mono tracking-[.3em]">Projects</h1>
              </FadeInSection>


              <FadeInSection scrollDirection={scrollDir}>
                <div className="w-60 sm:w-150 rounded-lg">
                  <Link href="https://olgcyouthandyoungadults.ca" target="_blank" rel='noopener noreferrer'>
                  <div className="w-full h-auto overflow-hidden relative group">

                    <img
                    src="/OLGC_Poster.jpg"
                    className="rounded-t-lg w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    ></img>
                   </div>
                  <p className="pr-10 pl-10 pt-5 pb-5 bg-zinc-900 rounded-b-lg">
                    A digital home for young adults seeking Christ beyond Sunday, Coffee with God brings Scripture, reflection, and community into the rhythm of daily life. <br></br>
                  </p>
                    </Link>

                </div>
              </FadeInSection>
            </div>      














            
          </div>


          




          
      </div>
    </main>
  );
}
