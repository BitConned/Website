
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface NetworkVisualizationProps {
  className?: string;
}

const NetworkVisualization: React.FC<NetworkVisualizationProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup scene
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 20;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    renderer.domElement.classList.add('three-canvas');
    
    // Create particle system for network nodes
    const particlesCount = 500;
    const particlesGeometry = new THREE.BufferGeometry();
    const positionArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      positionArray[i] = (Math.random() - 0.5) * 50;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.2,
      color: 0x00FF8F,
      transparent: true,
      opacity: 0.8,
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    
    // Create connections between nodes
    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0x00FF8F,
      opacity: 0.2,
      transparent: true
    });
    
    const linesGeometry = new THREE.BufferGeometry();
    const linesPositions: number[] = [];
    
    // Create random connections between points
    for (let i = 0; i < 150; i++) {
      const indexA = Math.floor(Math.random() * particlesCount);
      const indexB = Math.floor(Math.random() * particlesCount);
      
      const ax = positionArray[indexA * 3];
      const ay = positionArray[indexA * 3 + 1];
      const az = positionArray[indexA * 3 + 2];
      
      const bx = positionArray[indexB * 3];
      const by = positionArray[indexB * 3 + 1];
      const bz = positionArray[indexB * 3 + 2];
      
      linesPositions.push(ax, ay, az, bx, by, bz);
    }
    
    linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linesPositions, 3));
    const lines = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(lines);
    
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const animate = () => {
      particles.rotation.x += 0.0005;
      particles.rotation.y += 0.0008;
      
      lines.rotation.x = particles.rotation.x;
      lines.rotation.y = particles.rotation.y;
      
      renderer.render(scene, camera);
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose materials and geometries to prevent memory leaks
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
    };
  }, []);

  return <div ref={containerRef} className={className} />;
};

export default NetworkVisualization;
