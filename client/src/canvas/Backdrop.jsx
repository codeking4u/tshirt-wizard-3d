import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { useRef } from "react";

const Backdrop = () => {
  const shadows = useRef();
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal /* smooth edges of the shadow */
      frames={60} /* render in 60 frames */
      alphatest={0.85} /*  set transparency of shadows*/
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      ></RandomizedLight>
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      ></RandomizedLight>
    </AccumulativeShadows>
  );
};

export default Backdrop;
