'use client';
import { useEffect, useRef } from "react";

export default function CursorGlow () {
    const cursorGlowRef = useRef(null);
    //  window.addEventListener('mousemove', handleMouseMove) fires whenever you move the mouse.
  //  e.clientX and e.clientY are the cursor’s coordinates.
  //  We update the glow <div>’s left and top styles so it always follows the cursor.
  //  Cleanup removes the listener when the component unmounts.
  useEffect(() => {
  const handleMouseMove = (e) => {
    if (cursorGlowRef.current) {
      cursorGlowRef.current.style.left = `${e.clientX}px`;
      cursorGlowRef.current.style.top = `${e.clientY}px`;
    }
  };

  window.addEventListener("mousemove", handleMouseMove);
  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);
  return (
    <div
      ref={cursorGlowRef}
      className="pointer-events-none fixed w-[600px] h-[600px] rounded-full bg-[#b1c4cf] opacity-7 blur-3xl transform -translate-x-1/2 -translate-y-1/2 z-0"
    ></div>
  );
  }