"use client"
import { Fog, Vector3 } from "three";
import { Box, Cylinder, MapControls, OrbitControls, Plane, Sphere } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "usehooks-ts";
import { useSearchParams } from "next/navigation";
import WormHoleModel from "@/model/parts/WormHoleModel";
import { LoadingFullScreen } from "@/model/tools/LoadingFullScreen";
import { useUrlParamCatcher } from "@/../script/util/hook/useUrlParamCatcher";



import FixedScrollingCamera from "../../core/FixedScrollingCamera";
import { TIERPACK_LINKS, TIERPACK_NAMES } from "./DEFAULT_PACKS";
import { PackTab } from "./PackTab";
import DynaText from "@/model/core/DynaText";

export default function PackTabsScene() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const [mounted, setMounted] = useState(false);
  // const [selectedCubes, setSelectedCubes] = useState(new Set());
  // const $packTab:any = useRef()


  
  useEffect(() => {
    setMounted(true);
  }, []);



  const [lastTap, setLastTap] = useState(0);

  // function handleDoubleTap(index: number) {
  //   const currentTime = new Date().getTime();
  //   const tapLength = currentTime - lastTap;
  //   if (tapLength < 500 && tapLength > 0) {
  //     // Double tap detected
  //     toggleCubeSelection(index);
  //   }
  //   setLastTap(currentTime);
  // }

  function generateBoxPositions(count: number, interval: number, zigzagAmplitude: number = 0) {
    const positions = [];
    for (let i = 0; i < count; i++) {
      const yPosition = 0 // selectedCubes.has(i) ? 0.1 : 0;
      const xPosition = (i % 2 === 0) ? -zigzagAmplitude : zigzagAmplitude;
      positions.push([xPosition, i * interval, 0]);
    }
    return positions;
  }

  const boxPositions = generateBoxPositions(TIERPACK_LINKS.length, -2, 0.05);
  // const boxPositions = generateBoxPositions(14, -2, 0.1);
  // function toggleCubeSelection(index: any) {
  //   const newSelection = new Set(selectedCubes);
    
  
  //   if (newSelection.has(index)) {
  //     newSelection.delete(index);
  //   } else {
  //     newSelection.add(index);

  //   }
  //   setSelectedCubes(newSelection);
  // }
  const openLinkInNewTab = (index: number) => {
    const url = TIERPACK_LINKS[index]
    if (url.startsWith("http")) {
      window.open(url, "_blank");
    } else {
      window.open(`https://${url}`, "_blank");
    }
  }
  const openLinkInThisTab = (index: number): void => {
    if (index < 0 || index >= TIERPACK_LINKS.length) {
      console.error("Invalid index for TIERPACK_LINKS");
      return;
    }
    
    const url: string = TIERPACK_LINKS[index];
    const userConfirmation: boolean = confirm(`Do you want to proceed to "${(TIERPACK_NAMES[index] || 'Unnamed').replace("\n"," ")}" portfolio link? \n\n\nRedirection URL:${TIERPACK_LINKS[index]}`);
  
    if (userConfirmation) {
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
    } else {
      console.log("Redirection cancelled by the user.");
    }
  };
  

  if (!mounted) return <LoadingFullScreen />;

  return (
    <section id="packFrame" className={`flex-col h-100 tx-altfont-4 bg-b-10 ${true ? "" : "nopointer"}`}>
      <Canvas

        style={{ maxWidth: "100vw", height: "100%" }}
        shadows
        camera={{ fov: 140, position: [0, isSmallDevice ? .35 : .25, isSmallDevice ? 1.5 : 1.25] }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Plane rotation={[-Math.PI/2,0,0]} position={[0,4.5,0]} args={[8,8]}>
          <meshStandardMaterial transparent={true} opacity={0.5} />
        </Plane>
        <group scale={1} rotation={[0.25,-Math.PI/2,Math.PI]} position={[0,5,0]} >
            <PackGroup />
            <TradeGroup />
            <QubGroup />
        </group>

    <group position={[1.5, 1.25, -0.3]}>
      
    <DynaText text={`${"Scroll Down\n&"}`} color="#333333" emissive="#333333" textAlign="center"
        font={0.2} position={[-1.5, .7, 0.13]} rotation={[0, 0, 0]} hoverSpeed={2} />

<DynaText text={`${"Click a RED Button"}`} color="#331100" emissive="#331100" textAlign="center"
        font={0.3} position={[-1.1, 0.4, 0.13]} rotation={[0, 0, 0]} hoverSpeed={2} />
        
      <DynaText text={`${"|\nv"}`} color="#660000" emissive="#331100" textAlign="center"
        font={0.3} position={[-2.25, 0, 0.13]} rotation={[0, 0, -.75]} hoverSpeed={2} />
    </group>
        <FixedScrollingCamera dimensionThreshold={isSmallDevice ? -28 : -30} />
        <ambientLight intensity={0.02} />
        {/* <pointLight position={[6, 8, 4]} intensity={2} distance={20} /> */}
    <group position={[0, 0.4, 0]}>
        {boxPositions.map((position, index) => (
          <group key={index} position={[0.7, 0, 0]}>
                <PackTab 
                 state={{index,  position}}
                 calls={{openLinkInThisTab, }}
                 />

          </group>
        ))}
          </group>

      </Canvas>
    </section>
  );
}



const PackGroup = () => {
    const $sphereRef:any = useRef();

    // useFrame((state, delta) => {
    //     $sphereRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.03;
    // });

    return (
        <group position={[0,0,1]} onPointerDown={() => window.location.href = "https://wpack.vercel.app/"}>
            <DynaText text={"PACK"} color={0x000000}
                     position={new Vector3(0,-0.5,0)} rotation={[Math.PI,-Math.PI/2,0]}
                     isSelected={true} font={0.25} onClick={()=>{}}
            />
            <DynaText text={"PACK"} color={0x000000}
                     position={new Vector3(0,-0.5,0)} rotation={[Math.PI,Math.PI/2,0]}
                     isSelected={true} font={0.25} onClick={()=>{}}
            />
            <Sphere ref={$sphereRef} args={[0.3,16,16]} position={[0,0,0]} receiveShadow castShadow>
                <meshStandardMaterial color="#00A9E8" emissive={"#333333"} />
            </Sphere>
        </group>
    );
};
const TradeGroup = () => {
    const $cylinderRef:any = useRef();

    // useFrame((state, delta) => {
    //     $cylinderRef.current.rotation.y -= 0.003; // Rotate Cylinder
    // });
    return (
        <group position={[1,0,0]} onPointerDown={() => window.location.href = "https://wtrade.vercel.app/"}>
            <DynaText text={"TRADE"} color={0x000000}
                     position={new Vector3(0,-0.5,0)} rotation={[Math.PI,-Math.PI/2,0]}
                     isSelected={true} font={0.25} onClick={()=>{}}
            />
            <DynaText text={"TRADE"} color={0x000000}
                     position={new Vector3(0,-0.5,0)} rotation={[Math.PI,Math.PI/2,0]}
                     isSelected={true} font={0.25} onClick={()=>{}}
            />
            <Cylinder ref={$cylinderRef}  args={[0.5,0,0.68,4]} rotation={[0,0,0]} position={[0,0,0]} receiveShadow castShadow>
                <meshStandardMaterial color="#E50088" emissive={"#333333"} />  
            </Cylinder>
        </group>
    );
};
const QubGroup = () => {
    const $boxRef:any = useRef();

    // useFrame((state, delta) => {
    //     $boxRef.current.rotation.y -= 0.001; // Rotate Box
    //     $boxRef.current.rotation.x += 0.001; // Rotate Box
    //     $boxRef.current.rotation.z += 0.002; // Rotate Box
    // });
    return (
        <group position={[0,0,-1]} onPointerDown={() => window.location.href = "https://wqub.vercel.app/"}>
            <DynaText text={"QUB"} color={0x000000}
                 position={new Vector3(0,-0.5,0)} rotation={[Math.PI,-Math.PI/2,0]}
                 isSelected={true} font={0.25} onClick={()=>{}}
            />
            <DynaText text={"QUB"} color={0x000000}
                 position={new Vector3(0,-0.5,0)} rotation={[Math.PI,Math.PI/2,0]}
                 isSelected={true} font={0.25} onClick={()=>{}}
            />
            <Box ref={$boxRef}  args={[0.5,0.5,0.5]} position={[0,0,0]} receiveShadow castShadow>
                <meshStandardMaterial color="#F7EA00" emissive={"#333333"} />
            </Box>
        </group>
    );
};
