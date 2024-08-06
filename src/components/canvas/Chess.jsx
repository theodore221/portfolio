import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Chess = () => {
  const chess = useGLTF("./chess/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={5} />
      <spotLight
        position={[2.5, 5, 2.5]}
        angle={0.34}
        penumbra={0.2}
        intensity={200}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={chess.scene}
        scale={0.01}
        position={[0, -2, -0.5]}
        rotation={[-0.01, -0.95, -0]}
      />
    </mesh>
  );
};

const ChessCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [11, 1.5, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
        <Chess />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ChessCanvas;
