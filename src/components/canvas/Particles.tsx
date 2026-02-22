import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { MotionValue } from "framer-motion";

interface ParticlesProps {
    scrollProgress: MotionValue<number>;
}

export default function Particles({ scrollProgress }: ParticlesProps) {
    const pointsRef = useRef<THREE.Points>(null);
    const count = 3000;

    // Generate particle positions
    const [positions, colors] = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const colorTheme = [
            new THREE.Color("#8b5cf6"), // primary (purple)
            new THREE.Color("#3b82f6"), // secondary (blue)
            new THREE.Color("#06b6d4"), // accent (cyan)
            new THREE.Color("#ffffff"), // white
        ];

        for (let i = 0; i < count; i++) {
            // Create a large spherical spread
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            const radius = 10 + Math.random() * 15; // Spread out far

            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = radius * Math.cos(phi);

            // Randomly assign one of the theme colors
            const color = colorTheme[Math.floor(Math.random() * colorTheme.length)];
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }
        return [positions, colors];
    }, [count]);

    useFrame((state) => {
        if (!pointsRef.current) return;
        const time = state.clock.getElapsedTime();

        const scroll = scrollProgress.get();

        // Slowly rotate the entire particle system
        pointsRef.current.rotation.y = time * 0.05 + scroll * Math.PI * 2;
        pointsRef.current.rotation.x = time * 0.02 + scroll * Math.PI;

        // Add subtle parallax effect based on mouse hover (captured globally by parent if needed)
        // state.pointer contains normalized mouse coordinates (-1 to +1)
        pointsRef.current.position.x = THREE.MathUtils.lerp(pointsRef.current.position.x, (state.pointer.x * 2), 0.05);
        pointsRef.current.position.y = THREE.MathUtils.lerp(pointsRef.current.position.y, (state.pointer.y * 2), 0.05);
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    args={[colors, 3]}
                    count={colors.length / 3}
                    array={colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                vertexColors
                transparent
                opacity={0.6}
                sizeAttenuation
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}
