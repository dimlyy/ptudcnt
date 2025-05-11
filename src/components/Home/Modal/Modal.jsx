"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { yellowImg } from "../../../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { animateWithGsapTimeline } from "../../../utils/animations";
import Modal3D from "./Modal3D.jsx";
import { models, sizes } from "../../../constants";

const Model = () => {
  gsap.registerPlugin(ScrollTrigger);

  const modalHeading = useRef();

  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });

  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const tl = gsap.timeline();

  const [eventSource, setEventSource] = useState(null);

  useEffect(() => {
    const rootElement = document.getElementById("root");
    if (rootElement) {
      setEventSource(rootElement);
    }
  }, []);

  useEffect(() => {
    if (size === "large") {
      animateWithGsapTimeline(tl, small, smallRotation, "#view1", "#view2", {
        transform: "translateX(-100%)",
        duration: 2,
      });
    }

    if (size === "small") {
      animateWithGsapTimeline(tl, large, largeRotation, "#view2", "#view1", {
        transform: "translateX(0)",
        duration: 2,
      });
    }
  }, [size]);

  useGSAP(() => {
    gsap.from(modalHeading.current, {
      scrollTrigger: {
        trigger: modalHeading.current,
        start: "40% bottom",
      },
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power2.inOut",
    });
  });

  return (
    <section className="common-padding">
      <div className="max-w-full bg-white container rounded-xl border border-[var(--border-color)] mt-5">
        <h1
          ref={modalHeading}
          className="mt-10 pt-2 mb-[-50px] text-center text-3xl text-[var(--title-color)]"
        >
          Bạn có thể tương tác với mô hình
        </h1>

        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[75vh] overflow-hidden relative">
            <Modal3D
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />

            <Modal3D
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />

            {eventSource && (
              <Canvas
                className="w-full h-full"
                style={{
                  pointerEvents: "none",
                  position: "fixed",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  overflow: "hidden",
                }}
                eventSource={eventSource}
              >
                <View.Port />
              </Canvas>
            )}
          </div>

          <div className="mx-auto w-full">
            <p className="text-sm font-light text-center mb-5">{model.title}</p>

            <div className="flex items-center justify-center pb-3">
              <ul className="flex items-center justify-center px-4 py-4 rounded-full bg-gray-400 backdrop-blur">
                {models.map((item, i) => (
                  <li
                    key={i}
                    className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                    style={{ backgroundColor: item.color[0] }}
                    onClick={() => setModel(item)}
                  />
                ))}
              </ul>

              <button className="flex items-center justify-center p-1 rounded-full bg-gray-400 backdrop-blur ml-3 gap-1">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="w-10 h-10 text-sm flex justify-center items-center bg-gray-500 text-black rounded-full transition-all"
                    style={{
                      backgroundColor: size === value ? "black" : "transparent",
                      color: size === value ? "white" : "black",
                    }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
