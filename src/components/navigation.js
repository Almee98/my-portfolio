'use client';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const items = ["ABOUT", "EXPERIENCE","PROJECTS"]; 

  const [activeId, setActiveId] = useState("about");
  // useEffect(() => {
  //   const hash = window.location.hash.replace('#', '');
  //   setActiveId(hash || "about");
  // }, []);

  const handleNavigate = (id) => {
    // const container = document.querySelector('#content');
    // if (!container) return;
    const target = document.querySelector(`#${id}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } 
    else {
      window.location.hash = id;
    }
  };

  useEffect(() => {
    const sections = items.map((item) => document.querySelector(`#${item.toLowerCase()}`));

    const observer = new IntersectionObserver(
      // (entries) => {
      //   const visible = entries
      //   .filter((entry) => entry.isIntersecting)
      //   .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      //   if (visible.length > 70) {
      //     setActiveId(visible[0].target.id);
      //   }
      // },
    (entries) => {
      const entry = entries.find(e => e.isIntersecting);
      if (entry) {
        setActiveId(entry.target.id);
      }
    },
      {
        root: null, // window scroll
        threshold: 0.2, // 20% of the section is visible
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="fixed h-screen left-[10%] right-[65%] mt-20 flex flex-col justify-left pointer-events-none">
      <h1 className="text-5xl font-bold mb-2 text-left">Almee Christian</h1>
      <h2 className="text-xl text-gray-300 mt-2 text-left">Software Engineer | Open Source Contributor</h2>
      <p className="text-gray-400 mt-4 max-w-2xl">
        Passionate about building scalable and efficient applications. I specialize in full-stack development with a focus on user experience and performance.
      </p>
      <br/>
      <nav className="space-y-6 text-lg pointer-events-auto">
        {items.map((item) => {
          const id = item.toLowerCase();
          return (
            <a
              key={item}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavigate(id);
                setActiveId(id);
              }}
              className="flex items-center group w-fit cursor-pointer"
            >
              <span className={`h-[1px] transition-all duration-300 
              ${activeId == id ? "w-16 bg-teal-400" : "w-6 bg-white group-hover:w-16 group-hover:bg-teal-400"}`}>
              </span>
              <span className={`text-xs font-bold ml-2 transition-all duration-300 
                ${activeId == id ? "ml-4 text-teal-400" :  "group-hover:ml-4 group-hover:text-teal-400"}`}>
                {item}
              </span>
            </a>
          );
        })}
      </nav>
    </nav>
  );
}
