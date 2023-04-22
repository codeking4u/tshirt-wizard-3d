import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";

import state from "../store";
import { useRef } from "react";

const CameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);

  return <group>{children}</group>;
};

export default CameraRig;
