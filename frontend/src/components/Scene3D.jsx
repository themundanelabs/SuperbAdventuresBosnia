import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

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
function Particles() {
  const particlesRef = useRef();
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 100; i++) {
      const x = (Math.random() - 0.5) * 50;
      const y = Math.random() * 20;
      const z = (Math.random() - 0.5) * 50;
      temp.push({ position: [x, y, z] });
    }
    return temp;
  }, []);

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
            <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

// Main 3D Scene
const Scene3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 3, 10], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff6b35" />
        
        {/* Stars background */}
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        {/* Mountains */}
        <Mountain position={[-3, -1, -5]} scale={[2, 3, 2]} color="#2D5016" />
        <Mountain position={[2, -1, -8]} scale={[2.5, 4, 2.5]} color="#3A6B35" />
        <Mountain position={[0, -1, -10]} scale={[3, 5, 3]} color="#1a3a1a" />
        <Mountain position={[-5, -1, -12]} scale={[2, 3.5, 2]} color="#2D5016" />
        <Mountain position={[4, -1, -15]} scale={[2.8, 4.5, 2.8]} color="#3A6B35" />
        
        {/* Floating particles */}
        <Particles />
        
        {/* Ground plane */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="#1a3a1a" />
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