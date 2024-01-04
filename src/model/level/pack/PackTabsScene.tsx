"use client"
import { MapControls, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "usehooks-ts";
import { useSearchParams } from "next/navigation";
import WormHoleModel from "@/model/parts/WormHoleModel";
import { LoadingFullScreen } from "@/model/tools/LoadingFullScreen";
import { useUrlParamCatcher } from "@/../script/util/hook/useUrlParamCatcher";



import FixedScrollingCamera from "../../core/FixedScrollingCamera";
import { TIERPACK_LINKS } from "./DEFAULT_PACKS";
import { PackTab } from "./PackTab";
import DynaText from "@/model/core/DynaText";

export default function PackTabsScene() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const [mounted, setMounted] = useState(false);
  const [selectedCubes, setSelectedCubes] = useState(new Set());

  useEffect(() => {
    setMounted(true);
  }, []);


  const [lastTap, setLastTap] = useState(0);

  function handleDoubleTap(index: number) {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    if (tapLength < 500 && tapLength > 0) {
      // Double tap detected
      toggleCubeSelection(index);
    }
    setLastTap(currentTime);
  }

  function generateBoxPositions(count: number, interval: number, zigzagAmplitude: number = 0) {
    const positions = [];
    for (let i = 0; i < count; i++) {
      const yPosition = 0 // selectedCubes.has(i) ? 0.1 : 0;
      const xPosition = (i % 2 === 0) ? -zigzagAmplitude : zigzagAmplitude;
      positions.push([xPosition, i * interval, 0]);
    }
    return positions;
  }
  const boxPositions = generateBoxPositions(14, -2, 0.1);
  function toggleCubeSelection(index: any) {
    const newSelection = new Set(selectedCubes);
    if (newSelection.has(index)) {
      newSelection.delete(index);
    } else {
      newSelection.add(index);

    }
    setSelectedCubes(newSelection);
  }
  const openLinkInNewTab = (index: number) => {
    const url = TIERPACK_LINKS[index]
    if (url.startsWith("http")) {
      window.open(url, "_blank");
    } else {
      window.open(`https://${url}`, "_blank");
    }
  }
  const openLinkInThisTab = (index: number) => {
    if (index < 0 || index >= TIERPACK_LINKS.length) {
      console.error("Invalid index for TIERPACK_LINKS");
      return;
    }

    const url = TIERPACK_LINKS[index];
    if (/^https?:\/\//i.test(url)) {
      // If the URL starts with http or https
      window.location.href = url;
    } else if (url.startsWith('/')) {
      // If the URL is a relative path
      window.location.href = window.location.origin + url;
    } else {
      // If the URL is not a relative path and does not start with http or https
      window.location.href = `https://${url}`;
    }
  };

  if (!mounted) return <LoadingFullScreen />;

  return (
    <div id="packFrame" className={`flex-col h-100 tx-altfont-4 bg-b-10 ${true ? "" : "nopointer"}`}>
      <Canvas

        style={{ maxWidth: "100vw", height: "100%" }}
        shadows
        camera={{ fov: 130, position: [0, isSmallDevice ? .75 : .25, isSmallDevice ? 2 : 1.5] }}
        gl={{ preserveDrawingBuffer: true }}
      >
        
    <group position={[0.45, 1.45, -0.3]}>
      
    <DynaText text={`${"Scroll Down\n&"}`} color="#333333" emissive="#333333" textAlign="center"
        font={0.2} position={[0, .65, 0.13]} rotation={[0, 0, 0]} hoverSpeed={2} />

      <DynaText text={`${"Click a RED Button\n|\nv"}`} color="#331100" emissive="#331100" textAlign="center"
        font={0.3} position={[0, 0, 0.13]} rotation={[0, 0, 0]} hoverSpeed={2} />
    </group>
        <FixedScrollingCamera dimensionThreshold={isSmallDevice ? -28 : -30} />
        <ambientLight intensity={0.02} />
        {/* <pointLight position={[6, 8, 4]} intensity={2} distance={20} /> */}
    <group position={[0, 0.4, 0]}>
        {boxPositions.map((position, index) => (
          <group key={index} position={[-0.5, 0, 0]}>
                <PackTab
                 state={{index, selectedCubes, position}}
                 calls={{openLinkInThisTab, toggleCubeSelection}}
                 />

          </group>
        ))}
          </group>

      </Canvas>
    </div>
  );
}


