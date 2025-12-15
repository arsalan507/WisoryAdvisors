'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Torus, Box } from '@react-three/drei';
import * as THREE from 'three';

interface ShapeProps {
  position: [number, number, number];
  color: string;
  type: 'sphere' | 'torus' | 'box';
}

function FloatingShape({ position, color, type }: ShapeProps) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.2;
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      {type === 'sphere' && <Sphere args={[1, 32, 32]} />}
      {type === 'torus' && <Torus args={[1, 0.4, 16, 32]} />}
      {type === 'box' && <Box args={[1.5, 1.5, 1.5]} />}
      <MeshDistortMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        distort={0.3}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
}

export const FloatingShapes: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 opacity-30">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <FloatingShape position={[-3, 1, -2]} color="#EF3A33" type="sphere" />
        <FloatingShape position={[3, -1, -3]} color="#EF3A33" type="torus" />
        <FloatingShape position={[0, 2, -4]} color="#C9A96E" type="box" />
      </Canvas>
    </div>
  );
};
