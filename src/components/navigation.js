'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { LinkedinIcon } from '../widgets/linkedin';
import { GithubIcon } from '../widgets/github';
import { LeetcodeIcon } from '../widgets/leetcode';
import { DiscordIcon } from '../widgets/discord';
import { MailIcon } from '../widgets/mail';

export default function Navigation() {
  const items = ["About", "Experience","Projects"]; 

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
    <div className="relative pointer-events-auto">
      {/* lg:fixed lg:left-[12%] xs:left-[80%] lg:right-[65%] */}
      <h1 className="text-4xl sm:text-5xl text-gray-300 font-bold tracking-tight">Almee Christian</h1>
      <h2 className="text-lg font-medium tracking-tight text-gray-300 mt-3 leading-normal sm:text-xl">Full Stack Engineer</h2>
      <p className="text-gray-400 mt-4 max-w-xs">
        Passionate about building scalable and efficient applications. I specialize in full-stack development with a focus on user experience and performance.
      </p>
      <br/>
      <nav className="hidden lg:inline space-y-6 text-sm font-bold uppercase tracking-widest">
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
                ${activeId == id ? "ml-4 text-teal-400" : "group-hover:ml-4 group-hover:text-teal-400"}`}>
                {item}
              </span>
            </a>
          );
        })}
      </nav>
      <ul className="flex space-x-4 md:justify-start ml-1 mt-8 lg:absolute lg:-bottom-63 lg:pb-0 lg:left-0 sm:flex-wrap">
        <li>
          <a
            href="https://www.linkedin.com/in/almee-christian/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn profile"
          >
            <LinkedinIcon className='w-6 h-6' />
          </a>
        </li>
        <li>
          <a
            href="mailto:almeechristian@gmail.com"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label='My e-mail address'
          >
            <MailIcon className="w-6 h-6" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/almee"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="GitHub profile"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
        </li>
        <li>
          <a
            href="https://discord.com/invite/almeechristian"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label='Join my Discord'
          >
            <DiscordIcon className="w-6 h-6" />
          </a>
        </li>
        <li>
          <a
            href="https://leetcode.com/almee/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label='Leetcode Profile'
          >
            <LeetcodeIcon className="w-6 h-6" />
          </a>
        </li>
      </ul>
    </div>
  );
}
