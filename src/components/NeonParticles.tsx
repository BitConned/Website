import { useEffect, useRef } from 'react';

const NeonParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    type: 'logo' | 'floating' | 'mouse';
  }>>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const logoRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Get logo element - specifically the one in the Hero section
    logoRef.current = document.querySelector('.hero-content img[alt="BitConned"]');

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
      // Create mouse particles on move
      for (let i = 0; i < 5; i++) {
        createMouseParticle();
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Create logo particles
    const createLogoParticle = () => {
      if (!logoRef.current) return null;
      const rect = logoRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Create particles from random points around the logo
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * (rect.width / 2);
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      
      const speed = Math.random() * 2 + 1;
      const particleAngle = Math.random() * Math.PI * 2;
      
      return {
        x,
        y,
        vx: Math.cos(particleAngle) * speed,
        vy: Math.sin(particleAngle) * speed,
        size: Math.random() * 2 + 1,
        color: '#00FF8F',
        type: 'logo' as const
      };
    };

    // Create mouse particles
    const createMouseParticle = () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 1.5 + 0.5;
      return {
        x: mouseRef.current.x,
        y: mouseRef.current.y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 2 + 1,
        color: '#00FF8F',
        type: 'mouse' as const
      };
    };

    // Create floating particles
    const createFloatingParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        color: '#00FF8F',
        type: 'floating' as const
      };
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add new logo particles
      if (Math.random() < 0.2) {
        const particle = createLogoParticle();
        if (particle) particlesRef.current.push(particle);
      }

      // Add new floating particles
      if (Math.random() < 0.1) {
        particlesRef.current.push(createFloatingParticle());
      }

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Different fade rates for different particle types
        if (particle.type === 'logo') {
          particle.size *= 0.95;
        } else if (particle.type === 'mouse') {
          particle.size *= 0.92;
        } else {
          particle.size *= 0.99;
        }

        if (particle.size < 0.1) return false;

        // Keep floating particles within bounds
        if (particle.type === 'floating') {
          if (particle.x < 0) particle.x = canvas.width;
          if (particle.x > canvas.width) particle.x = 0;
          if (particle.y < 0) particle.y = canvas.height;
          if (particle.y > canvas.height) particle.y = 0;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        
        // Different glow effects for different particle types
        if (particle.type === 'logo') {
          ctx.shadowBlur = 15;
        } else if (particle.type === 'mouse') {
          ctx.shadowBlur = 12;
        } else {
          ctx.shadowBlur = 8;
        }
        
        ctx.shadowColor = particle.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        return true;
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default NeonParticles; 