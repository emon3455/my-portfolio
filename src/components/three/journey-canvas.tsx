"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const SPARK_POSITIONS = createSparkPositions();

function createSparkPositions() {
  const pts: number[] = [];
  for (let i = 0; i < 200; i += 1) {
    pts.push((Math.random() - 0.5) * 8);
    pts.push((Math.random() - 0.5) * 4);
    pts.push((Math.random() - 0.5) * 4);
  }
  return new Float32Array(pts);
}

function JourneyPath() {
  const meshRef = useRef<THREE.Mesh>(null);
  const curve = useMemo(
    () =>
      new THREE.CatmullRomCurve3(
        [
          new THREE.Vector3(-3.5, -1.8, -1.5),
          new THREE.Vector3(-2, -0.5, 0.4),
          new THREE.Vector3(0, 0.2, -0.8),
          new THREE.Vector3(1.8, 1, 0.6),
          new THREE.Vector3(3.2, 1.6, -0.4),
        ],
        false,
        "centripetal"
      ),
    []
  );

  const geometry = useMemo(
    () => new THREE.TubeGeometry(curve, 200, 0.08, 32, false),
    [curve]
  );

  useFrame(({ clock }) => {
    const material = meshRef.current?.material as THREE.MeshBasicMaterial | undefined;
    if (!material) return;
    material.opacity = 0.4 + Math.abs(Math.sin(clock.elapsedTime * 0.6)) * 0.5;
    const hue = (0.52 + (clock.elapsedTime % 6) / 12) % 1;
    material.color.setHSL(hue, 0.65, 0.72);
  });

  return (
    <mesh ref={meshRef} geometry={geometry} position={[0, 0, 0]}>
      <meshBasicMaterial transparent opacity={0.8} color="#7ce8ff" />
    </mesh>
  );
}

function PulseOrbit({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const scale = 0.8 + Math.sin(clock.elapsedTime * 2 + position[0]) * 0.2;
    meshRef.current.scale.setScalar(scale);
  });

  return (
    <Float speed={2.4} rotationIntensity={0.6} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshStandardMaterial
          color="#c3f1ff"
          emissive="#63ffe0"
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0.1}
        />
      </mesh>
    </Float>
  );
}

function SparkField() {
  const bufferRef = useRef<THREE.Points>(null);
  const positions = SPARK_POSITIONS;

  useFrame(({ clock }) => {
    if (!bufferRef.current) return;
    bufferRef.current.rotation.y = clock.elapsedTime * 0.05;
  });

  return (
    <points ref={bufferRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#7ce8ff"
        transparent
        opacity={0.45}
      />
    </points>
  );
}

export function JourneyCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      className="h-full w-full"
    >
      <color attach="background" args={["#05060b"]} />
      <PerspectiveCamera makeDefault position={[0, 0, 6]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 4, 2]} intensity={0.9} color="#88f5ff" />
      <pointLight position={[-4, -3, -2]} intensity={0.3} color="#e0b3ff" />
      <JourneyPath />
      <PulseOrbit position={[-2.6, -1.2, -0.6]} />
      <PulseOrbit position={[-0.8, -0.1, 0.5]} />
      <PulseOrbit position={[1.4, 0.8, -0.2]} />
      <PulseOrbit position={[2.6, 1.3, 0.6]} />
      <SparkField />
    </Canvas>
  );
}
