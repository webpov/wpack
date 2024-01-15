"use client"
import { Box, Cylinder, OrbitControls, Plane, Ring, RoundedBox, Sphere, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { ReactNode, useRef, Suspense, useEffect, useState, useMemo, forwardRef, useImperativeHandle } from "react"

type HoverSelectorProps = {
  sceneState: any; // Replace 'any' with a more specific type if available
  sceneCalls: any; // Replace 'any' with a more specific type if available
  fullSpinCount: number;
  triggerModel: ReactNode;
  s__fullSpinCount: (count: number) => void;
  isActionActive: boolean;
  isEnabled: boolean;
  s__isActionActive: (isActive: boolean) => void;
  children?: ReactNode;
};

// Define a type for the ref object
export interface HoverSelectorRef {
  triggerClickStart: (e: any) => void;
}

export const HoverSelector = forwardRef<HoverSelectorRef, HoverSelectorProps>(({
  sceneState,
  sceneCalls,
  fullSpinCount,
  triggerModel,
  s__fullSpinCount,
  isActionActive,
  s__isActionActive,
  isEnabled = false,
  children,
  ...props
}, ref) => {
  const $mainGroupRef = useRef<any>(null);

  const triggerClickStart = (e: any) => {
    if (!!e?.stopPropagation) {e.stopPropagation();}
    // if (!isEnabled) {return}
    if (isActionActive || reachedEnd) {
      return;
    }
    s__isActionActive(!isActionActive);
    if (!isActionActive) {
      sceneCalls.audioNotification("neutral", "../sound/click33.wav");
    }
  };

  useImperativeHandle(ref, () => ({
    triggerClickStart,
  }));


  const ACTION_SPEED = 1
  const LERP_SPEED = 0.05;
  const [targetRotation, setTargetRotation] = useState(0);
  const [reachedEnd, s__reachedEnd] = useState(false);

  useFrame((ctx, delta)=>{
    if (!$mainGroupRef.current) { return }
    if (!isActionActive) {
      if ($mainGroupRef.current.position.z !== targetRotation) {
        const lerpedRotation = $mainGroupRef.current.position.z + (targetRotation - $mainGroupRef.current.position.z) * LERP_SPEED;
        $mainGroupRef.current.position.z =  lerpedRotation;
      } {
        if ($mainGroupRef.current.position.z > 0 && $mainGroupRef.current.position.z < 0.01){

          $mainGroupRef.current.position.z = 0
          console.log("here")
          if (reachedEnd) {
            s__reachedEnd(false)
            s__fullSpinCount(fullSpinCount+1)
          }
        } else {
          // console.log("$mainGroupRef.current.position.z", $mainGroupRef.current.position.z)
        }
      }
    return
  }
  // console.log("555", $mainGroupRef.current.position.z)
    

  const ACTION_DISTANCE = 1
  // const ACTION_DISTANCE = Math.PI * 1.95
    
    if (Math.round($mainGroupRef.current.position.z) >= ACTION_DISTANCE) {
      // $mainGroupRef.current.position.z = 0
      // console.log("kkk")

      if (!reachedEnd) {
        s__reachedEnd(true)
        
        // console.log("qqqqq")
        setTimeout(()=>{
          s__isActionActive(false)
          // console.log("asdasdasdaegerg")
        },5000)
      }
      
      sceneCalls.audioNotification("neutral","../sound/click58.wav")
    } else {
    if ($mainGroupRef.current.position.z + ACTION_SPEED * delta > ACTION_DISTANCE) {
    } else {

      $mainGroupRef.current.position.z += ACTION_SPEED * delta
    }
    }
    // console.log("$mainGroupRef.current.position.z", $mainGroupRef.current.position.z)
  })

  return (<>
  <group onPointerDown={triggerClickStart}>
    {triggerModel}
  </group>
  <group ref={$mainGroupRef} >
    {children}
  </group>
  </>)
})

HoverSelector.displayName = "HoverSelector";