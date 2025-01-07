"use client";

import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import Lights from "../Light/Light";
import Loader from "../Loader/Loader";
import IPhone from "../Iphone/Iphone";
import * as THREE from "three";

// NHỚ CONFIG THÊM PLUGIN TREAC-THREE BÊN "ESLINT" ĐỂ CHẠY ĐƯỢC COMPONENT CỦA THREE
const Modal3D = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item,
}) => {
  const [isControlsInitialized, setControlsInitialized] = useState(false);

  useEffect(() => {
    if (controlRef.current) {
      controlRef.current.update();
      setControlsInitialized(true);
    }
  }, [controlRef]);

  useEffect(() => {
    if (isControlsInitialized) {
      controlRef.current.update();
    }
  }, [isControlsInitialized]);

  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <Suspense fallback={<Loader />}>
        <group ref={groupRef} position={[0, 0 ,0]}>
          <IPhone 
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </group>
      </Suspense>

      {/* OrbitControls */}
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0 ,0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />
    </View>
  );
};

export default Modal3D;