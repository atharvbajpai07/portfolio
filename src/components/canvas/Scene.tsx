import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { MotionValue } from "framer-motion";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import Particles from "./Particles";
import HeroGeometry from "./HeroGeometry";

interface SceneProps {
    scrollProgress: MotionValue<number>;
}

export default function Scene({ scrollProgress }: SceneProps) {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                dpr={[1, 2]} // Support high-dpi displays but cap at 2 for performance
                gl={{ antialias: false, alpha: true }} // alpha for transparent background, antialias off for postprocessing
            >
                <color attach="background" args={["#050505"]} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} color={"#8b5cf6"} />
                <directionalLight position={[-10, -10, -5]} intensity={1} color={"#06b6d4"} />

                <Suspense fallback={null}>
                    <Particles scrollProgress={scrollProgress} />
                    <HeroGeometry scrollProgress={scrollProgress} />

                    <EffectComposer>
                        <Bloom
                            luminanceThreshold={0.2}
                            luminanceSmoothing={0.9}
                            intensity={1.5}
                        />
                        <Vignette eskil={false} offset={0.1} darkness={1.1} />
                    </EffectComposer>
                </Suspense>
            </Canvas>
        </div>
    );
}
