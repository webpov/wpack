"use client"
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";


export const FixedScrollingCamera = ({dimensionThreshold=24}:{dimensionThreshold?:number}) => {
  const { camera } = useThree();
  const lightRef = useRef<any>(); // Ref for the light
  const velocity = useRef(0); // Velocity for damping
  const dampingFactor = 0.4; // Adjust this value for smoother damping

  // Function to handle camera movement with damping
  const moveCamera = (deltaZ: number) => {
    velocity.current += deltaZ;
  };

  // Damping effect
  useFrame(() => {
    if (Math.abs(velocity.current) < 0.0005) velocity.current = 0; // Threshold to stop damping
    if (velocity.current !== 0) {
      console.log("camera.position.y",camera.position.y)
      if (camera.position.y - velocity.current > 5.5) {return}
      if (camera.position.y - velocity.current < -20) {return}
      camera.position.y -= velocity.current;
      if (lightRef.current) {
        lightRef.current.position.y -= velocity.current / 1.25;
      }
      velocity.current *= (1 - dampingFactor); // Apply damping
    }
  });

  const prevTouchY = useRef<number>(0);
  const prevMouseY = useRef<number>(0);
  const isDragging = useRef<boolean>(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      moveCamera(e.deltaY * 0.003); // Adjust sensitivity as needed
    };

    document.getElementById('packFrame')?.addEventListener('wheel', handleScroll);
    return () => document.getElementById('packFrame')?.removeEventListener('wheel', handleScroll);
  }, [camera]);

// Handle touch events for swipes (inverted for mobile)
useEffect(() => {
  const handleTouchStart = (e: TouchEvent) => {
    e.preventDefault();  // Prevent default behavior like pull-to-refresh
    prevTouchY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault();  // Prevent default behavior like pull-to-refresh
    const deltaY = prevTouchY.current - e.touches[0].clientY; // Inverted direction
    moveCamera(deltaY * 0.01); // Adjust sensitivity as needed
    prevTouchY.current = e.touches[0].clientY;
  };

  document.getElementById('packFrame')?.addEventListener('touchstart', handleTouchStart, { passive: false });
  document.getElementById('packFrame')?.addEventListener('touchmove', handleTouchMove, { passive: false });
  return () => {
    document.getElementById('packFrame')?.removeEventListener('touchstart', handleTouchStart);
    document.getElementById('packFrame')?.removeEventListener('touchmove', handleTouchMove);
  };
}, [camera]);
  // Handle mouse drag events
  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      prevMouseY.current = e.clientY;
      isDragging.current = true;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.current) {
        const deltaY = prevMouseY.current - e.clientY;
        moveCamera(deltaY * 0.01);
        prevMouseY.current = e.clientY;
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    document.getElementById('packFrame')?.addEventListener('mousedown', handleMouseDown);
    document.getElementById('packFrame')?.addEventListener('mousemove', handleMouseMove);
    document.getElementById('packFrame')?.addEventListener('mouseup', handleMouseUp);
    document.getElementById('packFrame')?.addEventListener('mouseleave', handleMouseUp);

    return () => {
      document.getElementById('packFrame')?.removeEventListener('mousedown', handleMouseDown);
      document.getElementById('packFrame')?.removeEventListener('mousemove', handleMouseMove);
      document.getElementById('packFrame')?.removeEventListener('mouseup', handleMouseUp);
      document.getElementById('packFrame')?.removeEventListener('mouseleave', handleMouseUp);
    };
  }, [camera]);

  return (<>
      <group>
          <pointLight ref={lightRef} position={[6, 8, 4]} intensity={2} distance={20} />
      </group>
  </>); 
};

  export default FixedScrollingCamera