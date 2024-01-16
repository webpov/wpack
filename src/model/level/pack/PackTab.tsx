"use client";
import { Box, Cylinder, Html, RoundedBox, Sphere } from "@react-three/drei";
import * as THREE from 'three';
import BookCover from "../../core/BookCover";
import DynaText from "../../core/DynaText";
import { TIERPACK_LINKS, TIERPACK_NAMES, TIERPACK_COLORS, TIERPACK_IMAGES } from "./DEFAULT_PACKS";
import { HoverSelector } from "@/model/tools/HoverSelector";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { useLoader } from '@react-three/fiber';
import { TextureLoader, Texture } from 'three';
import React, { MouseEvent } from 'react';


interface ImagePlaneProps {
  src: string;
  position: [number, number, number];
}

const ImagePlane: React.FC<ImagePlaneProps> = ({ src, position,  }) => {
  const texture: Texture = useLoader(TextureLoader, src);

  return (
    <mesh 
      position={position}
      rotation={[-Math.PI / 2, 0, 0]}
      // onClick={onClick}
    >
      <planeBufferGeometry args={[0.5, 0.5]} />
      <meshStandardMaterial map={texture}  transparent={true} />
    </mesh>
  );
}
export const PackTab = forwardRef(({ state, calls }: any)=> {
    const $hoverSelector = useRef<any>(null);
  const [isSelected, s__isSelected] = useState(false);
  const [reachedEnd, s__reachedEnd] = useState(false);
  const [fullSpinCount, s__fullSpinCount] = useState(0);

  const [isMoonSpinActive, s__isMoonisSpinActive] = useState(false);
  const triggerIsActionActive = () => {
    s__isSelected(!isMoonSpinActive)
    s__isMoonisSpinActive(!isMoonSpinActive)
  };
  const triggerSelectCube = (e:any) => {
    
    e.stopPropagation();
    
    if ($hoverSelector.current) {
      $hoverSelector.current.triggerClickStart();
    }
    // calls.toggleCubeSelection(state.index);
    s__isSelected(true)
  }
  const triggerFullSpinCount = (val:any) => {
    console.log("triggerFullSpinCount", val);
    s__fullSpinCount(val);
  }

  useImperativeHandle(state.ref, () => ({
    isSelected,
    triggerSelectCube,
    triggerFullSpinCount,
    isMoonSpinActive,
    triggerIsActionActive,
    reachedEnd,
    fullSpinCount,
  }));
  return (<>



    <group position={new THREE.Vector3(...state.position)}>

      
      <HoverSelector
      isEnabled={!isSelected}
      ref={$hoverSelector}
      sceneState={{}}
      {...{
        sceneCalls: { audioNotification: (arg1: any, arg2: any) => { } },
        isActionActive: isMoonSpinActive,
        s__isActionActive: triggerIsActionActive,
        s__reachedEnd: s__reachedEnd,
        fullSpinCount: fullSpinCount, 
        s__fullSpinCount: triggerFullSpinCount,
      }}
        triggerModel={
        // <Sphere args={[0.1, 12, 12]} castShadow receiveShadow position={[0,1,0]}>
        //   <meshStandardMaterial color="orange" emissive={state.isMoonSpinActive ? "#332200" : "#000"} />
        // </Sphere>
        <>
        {/* <Box args={[1.3,2,0.9]} position={[-0.6,-0.7,0]}>
          <meshStandardMaterial color="lightgrey" />

        </Box> */}
        <Cylinder args={[0.25,0.25,0.25]} position={[-1.75,!isMoonSpinActive && !reachedEnd ? 0.2 : 0.1,0]}
          rotation={[Math.PI/2, 0, 0]}
        >
        <meshStandardMaterial color={!isMoonSpinActive && !reachedEnd ? "red" : "grey"} />

      </Cylinder>
      
      {/* <Box args={[0.25,0.25,0.25]} position={[-0.85,!isMoonSpinActive && !reachedEnd ? 0.2 : 0.1,0]}>
        <meshStandardMaterial color={!isMoonSpinActive && !reachedEnd ? "red" : "grey"} />

      </Box> */}
      </>
        }
      >
        <group // onPointerDown={(e) => { triggerSelectCube(e) }}
        >
          <RoundedBox
            castShadow
            receiveShadow
            args={[1, 1.5, 0.2]}
            
          >
            <meshStandardMaterial color={!isSelected ? "lightgrey" : "white"} />
          </RoundedBox>
          <group position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, 0]}>

            <DynaText text={`${TIERPACK_NAMES[state.index] || 'Book'}`} color={TIERPACK_COLORS[state.index][2]} emissive={TIERPACK_COLORS[state.index][2]}
              font={0.2} position={[0, 0, -0.45]} />

              
{/* <Html  position={[0, 0, 0.05]} scale={0.33} rotation={[-Math.PI/2, 0, 0]} transform occlude={"raycast"} className="nopointer nocursor noselect" 
  
>
                        <img  src={TIERPACK_IMAGES[state.index]} alt="" className="nopointer nocursor noselect z--1 bord-r-15"  bord-r-15
                        onPointerDown={(e) => {
                          alert("clicked");
                          e.stopPropagation();
                        }}
                          width={60}
                          height={60}
                          style={{verticalAlign:"bottom"}}
                        />
                    </Html> */}




            {/* <ImagePlane src={TIERPACK_IMAGES[state.index]} position={[0, 0.001, 0.05]} /> */}


            <DynaText text={`#1${state.index}`} color="#666" emissive="#000"
              font={0.3} position={[0.24, 0, 0.6]} />
            <DynaText text={`Tier Pack`} color="#333" emissive="#000"
              font={0.1} position={[-0.24, 0, 0.6]} />
          </group>
          
          <group scale={[0.01, 0.1, 0.1]} rotation={[Math.PI / 2, 0, Math.PI / 2]}
           position={[0.48, -0.24, 0]}>
            <BookCover color={!!isSelected ? TIERPACK_COLORS[state.index][0] : TIERPACK_COLORS[state.index][1]} />
          </group>
        </group>



    {isSelected && (
      
      <group position={[0, -0.01, -0.02]}>
      <group position={[-1, .72, 0]}>
      <DynaText text={`Click Tier List to Enter`} color="#000" emissive="#000" textAlign="start"
        font={0.09} position={[0, 0, 0.115]} rotation={[0, 0, 0]} />
        </group>
        <Box args={[0.8, 0.2, 0.02]} position={[-1, .7, 0.1]} castShadow receiveShadow>
          <meshStandardMaterial color="lightgrey" />
        </Box>
        </group>
)}
    {isSelected && (
      <group 
        onPointerDown={(e:any) => {e.stopPropagation();calls.openLinkInThisTab(state.index)}}

      >

        <Box args={[0.88, 1.28, 0.02]} position={[-1, 0, 0.1]} castShadow receiveShadow>
          <meshStandardMaterial color="grey" />
        </Box>
        {[...Array(5)].map((_, row) => {
          const selectedATier = TIERPACK_LINKS[state.index];

          const urlParams = new URLSearchParams(
            new URL(selectedATier, window.location.href).search
          );
          const Atokens: any = [];
          const Btokens: any = [];
          const Ctokens: any = [];
          const Dtokens: any = [];
          const Etokens: any = [];
          urlParams.forEach((value, key) => {
            if (key.toLowerCase().startsWith('a')) {
              try {
                const jsonValue = JSON.parse(value);
                if (jsonValue && jsonValue.symbol) {
                  Atokens.push(jsonValue.symbol);
                }
              } catch (e) {
                // Handle any parsing errors
              }
            }
            if (key.toLowerCase().startsWith('b')) {
              try {
                const jsonValue = JSON.parse(value);
                if (jsonValue && jsonValue.symbol) {
                  Btokens.push(jsonValue.symbol);
                }
              } catch (e) {
                // Handle any parsing errors
              }
            }
            if (key.toLowerCase().startsWith('c')) {
              try {
                const jsonValue = JSON.parse(value);
                if (jsonValue && jsonValue.symbol) {
                  Ctokens.push(jsonValue.symbol);
                }
              } catch (e) {
                // Handle any parsing errors
              }
            }
            if (key.toLowerCase().startsWith('d')) {
              try {
                const jsonValue = JSON.parse(value);
                if (jsonValue && jsonValue.symbol) {
                  Dtokens.push(jsonValue.symbol);
                }
              } catch (e) {
                // Handle any parsing errors
              }
            }
            if (key.toLowerCase().startsWith('e')) {
              try {
                const jsonValue = JSON.parse(value);
                if (jsonValue && jsonValue.symbol) {
                  Etokens.push(jsonValue.symbol);
                }
              } catch (e) {
                // Handle any parsing errors
              }
            }
          });

          const tokenStringA = Atokens.join(' · ')?.replace(/USDT/g, "");
          const tokenStringB = Btokens.join(' · ')?.replace(/USDT/g, "");
          const tokenStringC = Ctokens.join(' · ')?.replace(/USDT/g, "");
          const tokenStringD = Dtokens.join(' · ')?.replace(/USDT/g, "");
          const tokenStringE = Etokens.join(' · ')?.replace(/USDT/g, "");


          return (
            <group key={row}>
              <Box args={[0.15, 0.12, 0.02]} position={[-0.7, 0.5 - 0.25 * row, 0.13]} castShadow receiveShadow>
                <meshStandardMaterial color={['red', 'gold', 'green', 'blue', 'purple'][row]} />
              </Box>
              <Box args={[0.85, 0.2, 0.05]} position={[-1, 0.5 - 0.25 * row, 0.1]} castShadow receiveShadow>
                <meshStandardMaterial color="black" />
              </Box>
              <group position={[-1.08, 0.5, 0]}>
                <DynaText text={`${tokenStringA}`} color="#fff" emissive="#fff" textAlign="start"
                  font={0.12} position={[0, 0, 0.13]} rotation={[0, 0, 0]} />
              </group>
              <group position={[-1.08, 0.25, 0]}>
                <DynaText text={`${tokenStringB}`} color="#fff" emissive="#fff" textAlign="start"
                  font={0.1} position={[0, 0, 0.13]} rotation={[0, 0, 0]} />
              </group>
              <group position={[-1.08, 0, 0]}>
                <DynaText text={`${tokenStringC}`} color="#fff" emissive="#fff" textAlign="start"
                  font={0.09} position={[0, 0, 0.13]} rotation={[0, 0, 0]} />
              </group>
              <group position={[-1.08, -0.25, 0]}>
                <DynaText text={`${tokenStringD}`} color="#fff" emissive="#fff" textAlign="start"
                  font={0.08} position={[0, 0, 0.13]} rotation={[0, 0, 0]} />
              </group>
              <group position={[-1.08, -0.5, 0]}>
                <DynaText text={`${tokenStringE}`} color="#fff" emissive="#fff" textAlign="start"
                  font={0.07} position={[0, 0, 0.13]} rotation={[0, 0, 0]} />
              </group>
            </group>
          );
        })}
      </group>
    )}

</HoverSelector>
    </group>

  </>);
})


PackTab.displayName = 'PackTab';

export default PackTab;