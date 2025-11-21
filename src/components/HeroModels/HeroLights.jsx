import React from "react";
import * as THREE from "three";

const HeroLights = () => {
  return (
    <>
      {/* <spotLight position={[1,1,1]}
      intensity={100}
      color={"red"}/> 
      <spotLight position={[-1,-1,-1]}
      intensity={100}
      color={"blue"}/> 
      <spotLight position={[0,0,3]}
      intensity={100}
      color={"green"}/> 
      <spotLight position={[7,7,7]}
      intensity={100} */}
      <spotLight
        position={[0.35, 1, 1.2]}
        intensity={25}
        color={"white"}
        angle={0.18}
        penumbra={0.5}
      />

      <spotLight
        position={[4, 5, 4]}
        angle={0.3}
        intensity={40}
        penumbra={0.5}
        color="#4cc9f0"
      />
      <spotLight
        position={[-3, 5, 5]}
        angle={0.4}
        intensity={60}
        penumbra={1}
        color="#9d4edd"
      />
      <primitive 
      object={new THREE.RectAreaLight("#A25955", 8, 3, 2 )} 
      position={[1, 3, 4]}
      intensity={15}
      penumbra={4}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      />
      <pointLight
      position={[0, 1, 0]}
      intensity={10}
      color="#7209b7"
      />
      <pointLight
      position={[1, 2, -2]}
      intensity={10}
      color="#0d00a4"
      />
    </>
  );
};

export default HeroLights;
