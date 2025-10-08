import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Get time-based theme
function getTimeOfDay() {
  const hour = new Date().getHours();
  
  if (hour >= 6 && hour < 12) {
    return 'morning';
  } else if (hour >= 12 && hour < 18) {
    return 'noon';
  } else if (hour >= 18 && hour < 21) {
    return 'evening';
  } else {
    return 'night';
  }
}

// Theme configurations
const themes = {
  morning: {
    skyColor: '#87CEEB',
    ambientIntensity: 0.6,
    directionalIntensity: 1.2,
    directionalColor: '#FFE5B4',
    mountainColors: ['#4A6741', '#5A7A51', '#3A5A31'],
    groundColor: '#6B8E5C',
    particleColor: '#FFD700',
    pointLightColor: '#FFA500',
    starsVisible: false,
    sunMoonColor: '#FFD700',
    sunMoonPosition: [15, 8, -20],
    sunMoonSize: 2
  },
  noon: {
    skyColor: '#4A90E2',
    ambientIntensity: 0.8,
    directionalIntensity: 1.5,
    directionalColor: '#FFFFFF',
    mountainColors: ['#2D5016', '#3A6B35', '#1a3a1a'],
    groundColor: '#2D5016',
    particleColor: '#FFFFFF',
    pointLightColor: '#FFFFFF',
    starsVisible: false,
    sunMoonColor: '#FFFF00',
    sunMoonPosition: [0, 15, -20],
    sunMoonSize: 2.5
  },
  evening: {
    skyColor: '#FF6B35',
    ambientIntensity: 0.5,
    directionalIntensity: 0.8,
    directionalColor: '#FF8C42',
    mountainColors: ['#3A4A2A', '#4A5A3A', '#2A3A1A'],
    groundColor: '#3A4A2A',
    particleColor: '#FFA500',
    pointLightColor: '#FF6B35',
    starsVisible: false,
    sunMoonColor: '#FF6347',
    sunMoonPosition: [-15, 5, -20],
    sunMoonSize: 3
  },
  night: {
    skyColor: '#0A1128',
    ambientIntensity: 0.3,
    directionalIntensity: 0.4,
    directionalColor: '#4169E1',
    mountainColors: ['#1a2a1a', '#2a3a2a', '#0a1a0a'],
    groundColor: '#0a1a0a',
    particleColor: '#FFFFFF',
    pointLightColor: '#4169E1',
    starsVisible: true,
    sunMoonColor: '#F0F0F0',
    sunMoonPosition: [10, 12, -20],
    sunMoonSize: 1.5
  }
};

// Sun/Moon component
function CelestialBody({ theme }) {
  const config = themes[theme];
  
  return (
    <mesh position={config.sunMoonPosition}>
      <sphereGeometry args={[config.sunMoonSize, 32, 32]} />
      <meshBasicMaterial color={config.sunMoonColor} />
      {theme === 'evening' && (
        <pointLight intensity={1.5} color={config.sunMoonColor} distance={50} />
      )}
    </mesh>
  );
}

// Mountain component
function Mountain({ position, scale, color }) {
  const meshRef = useRef();
  
  const geometry = useMemo(() => {
    const geo = new THREE.ConeGeometry(1, 2, 4);
    return geo;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale} geometry={geometry} rotation={[0, Math.PI / 4, 0]}>
      <meshStandardMaterial color={color} flatShading />
    </mesh>
  );
}

// Floating particles
function Particles({ theme }) {
  const particlesRef = useRef();
  const config = themes[theme];
  
  const particles = useMemo(() => {
    const temp = [];
    const count = theme === 'night' ? 150 : 80;
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 50;
      const y = Math.random() * 20;
      const z = (Math.random() - 0.5) * 50;
      temp.push({ position: [x, y, z] });
    }
    return temp;
  }, [theme]);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={particlesRef}>
      {particles.map((particle, i) => (
        <Float key={i} speed={2} rotationIntensity={0.5} floatIntensity={2}>
          <mesh position={particle.position}>
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshBasicMaterial 
              color={config.particleColor} 
              transparent 
              opacity={theme === 'night' ? 0.8 : 0.5} 
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

// Birds for morning/noon
function Birds({ theme }) {
  const birdsRef = useRef();
  
  const birds = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 5; i++) {
      const x = (Math.random() - 0.5) * 30;
      const y = 5 + Math.random() * 10;
      const z = -10 + Math.random() * -20;
      temp.push({ position: [x, y, z], speed: 0.5 + Math.random() * 0.5 });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (birdsRef.current && (theme === 'morning' || theme === 'noon')) {
      birdsRef.current.children.forEach((bird, i) => {
        bird.position.x = Math.sin(state.clock.elapsedTime * birds[i].speed) * 15;
        bird.position.z = -15 + Math.cos(state.clock.elapsedTime * birds[i].speed * 0.5) * 10;
      });
    }
  });

  // Only render birds for morning and noon
  if (theme !== 'morning' && theme !== 'noon') return null;

  return (
    <group ref={birdsRef}>
      {birds.map((bird, i) => (
        <mesh key={i} position={bird.position}>
          <boxGeometry args={[0.3, 0.1, 0.1]} />
          <meshBasicMaterial color="#000000" />
        </mesh>
      ))}
    </group>
  );
}

// Main 3D Scene
const Scene3D = ({ timeOverride }) => {
  const [timeOfDay, setTimeOfDay] = useState(getTimeOfDay());
  const actualTime = timeOverride || timeOfDay;
  const theme = themes[actualTime];

  // Update time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeOfDay(getTimeOfDay());
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 3, 10], fov: 60 }}>
        {/* Background color */}
        <color attach="background" args={[theme.skyColor]} />
        
        {/* Lighting based on time */}
        <ambientLight intensity={theme.ambientIntensity} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={theme.directionalIntensity} 
          color={theme.directionalColor}
        />
        <pointLight 
          position={[-10, -10, -5]} 
          intensity={0.5} 
          color={theme.pointLightColor} 
        />
        
        {/* Stars only at night */}
        {theme.starsVisible && (
          <Stars radius={100} depth={50} count={5000} factor={6} saturation={0} fade speed={1} />
        )}
        
        {/* Sun/Moon */}
        <CelestialBody theme={actualTime} />
        
        {/* Birds for morning/noon */}
        <Birds theme={actualTime} />
        
        {/* Mountains with theme colors */}
        <Mountain position={[-3, -1, -5]} scale={[2, 3, 2]} color={theme.mountainColors[0]} />
        <Mountain position={[2, -1, -8]} scale={[2.5, 4, 2.5]} color={theme.mountainColors[1]} />
        <Mountain position={[0, -1, -10]} scale={[3, 5, 3]} color={theme.mountainColors[2]} />
        <Mountain position={[-5, -1, -12]} scale={[2, 3.5, 2]} color={theme.mountainColors[0]} />
        <Mountain position={[4, -1, -15]} scale={[2.8, 4.5, 2.8]} color={theme.mountainColors[1]} />
        
        {/* Floating particles */}
        <Particles theme={actualTime} />
        
        {/* Ground plane */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color={theme.groundColor} />
        </mesh>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;