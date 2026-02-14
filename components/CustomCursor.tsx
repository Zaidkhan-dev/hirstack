
import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  
  // Use a ref for tracking mouse position to avoid state-induced lag in animation frame
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if device is mobile/touch
    const checkMobile = () => {
      const isTouch = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;
      setIsMobile(isTouch);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsHovering(true);
    const onMouseUp = () => setIsHovering(false);

    // Hover detection for interactive elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Smooth trailing animation using requestAnimationFrame
    let rafId: number;
    const animate = () => {
      const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;
      
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.15);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.15);
      
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }
      
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', checkMobile);
      cancelAnimationFrame(rafId);
    };
  }, [isMobile, isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Main trailing ring */}
      <div 
        ref={ringRef}
        className={`fixed top-0 left-0 w-10 h-10 border border-blue-500/50 rounded-full pointer-events-none z-[9999] transition-all duration-300 ease-out
          ${isHovering ? 'w-16 h-16 border-blue-400 bg-blue-500/10' : ''}`}
        style={{ willChange: 'transform' }}
      />
      {/* Center dot */}
      <div 
        ref={dotRef}
        className={`fixed top-0 left-0 w-1.5 h-1.5 bg-blue-400 rounded-full pointer-events-none z-[9999] transition-opacity duration-300
          ${isHovering ? 'opacity-0' : 'opacity-100'}`}
        style={{ willChange: 'transform' }}
      />
    </>
  );
};
