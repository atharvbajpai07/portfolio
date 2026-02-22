import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, PresentationControls } from "@react-three/drei";
import * as THREE from "three";

interface HeroGeometryProps {
    scrollProgress: number;
}

export default function HeroGeometry({ scrollProgress }: HeroGeometryProps) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        const time = state.clock.getElapsedTime();

        // Intro animation: smoothly scale up from 0 to 1
        const targetScale = Math.min(1, time * 1.5);
        meshRef.current.scale.setScalar(
            THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1)
        );

        // Fade out / move up as user scrolls down
        meshRef.current.position.y = scrollProgress * 5; // Move up out of view
        const targetOpacity = Math.max(0, 1 - scrollProgress * 5); // Fade out quickly

        const material = meshRef.current.material as THREE.MeshPhysicalMaterial;
        if (material) {
            material.opacity = THREE.MathUtils.lerp(material.opacity, targetOpacity, 0.1);
        }
    });

    return (
        <PresentationControls
            global
            rotation={[0.13, 0.1, 0]}
            polar={[-0.4, 0.2]}
            azimuth={[-1, 0.75]}
            snap
        >
            <Float rotationIntensity={2} floatIntensity={5} speed={2}>
                <mesh ref={meshRef} position={[2, 0, 0]} scale={0}>
                    {/* A complex, classy abstract geometry */}
                    <icosahedronGeometry args={[1.5, 0]} />

                    {/* Glass-like material reflecting environmental lights */}
                    <meshPhysicalMaterial
                        color="#8b5cf6"
                        emissive="#10002b"
                        roughness={0.1}
                        metalness={0.8}
                        reflectivity={1}
                        clearcoat={1}
                        clearcoatRoughness={0.1}
                        transmission={0.9} // Glass-like transparency
                        ior={1.5}
                        thickness={0.5}
                        transparent
                        opacity={0} // Start hidden for transition
                    />
                </mesh>

                {/* Inner core mesh */}
                <mesh position={[2, 0, 0]}>
                    <icosahedronGeometry args={[0.8, 0]} />
                    <meshBasicMaterial color="#06b6d4" wireframe />
                </mesh>
            </Float>
        </PresentationControls>
    );
}
