'use client';

export const ArrowRight = ({ className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width="22" 
    height="22" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={`inline-block transform transition-transform duration-300 ${className}`}
  >
    <path d="M5 12h14"/>
    <path d="M12 5l7 7-7 7"/>
  </svg>
);
