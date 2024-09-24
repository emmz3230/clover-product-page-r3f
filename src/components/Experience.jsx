"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

import Scene from "@/components/Scene";
import { LoadingAnimation } from "@/components/LoadingAnimation";

export default function Experience({ cameraPosition }) {
  function Fallback() {
    return <LoadingAnimation />;
  }

  return (
    <Canvas
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: "100%", height: "100%", borderRadius: "10px" }}
    >
      <color attach="background" args={["#F2F0EA"]} />
      <Environment files={"/default.exr"} blur={1} />
      <Suspense fallback={<Fallback />}>
        <Scene cameraPosition={cameraPosition} />
      </Suspense>
    </Canvas>
  );
}
