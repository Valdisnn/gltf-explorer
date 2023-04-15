import { React, useState, useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
// eslint-disable-next-line
import { OrbitControls, Float } from "@react-three/drei";
import { useSnapshot } from "valtio";

export default function Girl(props) {
  const { nodes, materials } = useGLTF("/Girl/scene.gltf");
  const snap = useSnapshot(props.colors);
  const [hovered, setHovered] = useState(null);
  const controls = useRef();

  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;
    if (hovered) {
      document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
        cursor
      )}'), auto`;
    }
    return () => (document.body.style.cursor = "auto");
    // eslint-disable-next-line
  }, [hovered]);

  return (
    <group
      {...props}
      dispose={null}
      position={[0, -10, 0]}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(e.object.material.name);
      }}
      onPointerOut={(e) => {
        if (e.intersections.length === 0) {
          setHovered(null);
        }
      }}
      onPointerDown={(e) => {
        e.stopPropagation();
        props.updateCurrent(e.object.material.name);
      }}
      onPointerMissed={() => {
        props.updateCurrent(null);
      }}
    >
      <group rotation={[-Math.PI / 2, 0, 3.5]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <primitive object={nodes.GLTF_created_0_rootJoint} />
          <skinnedMesh
            geometry={nodes.Object_442.geometry}
            material={materials.e79cbce799bd}
            skeleton={nodes.Object_442.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_445.geometry}
            material={materials.e884b8}
            skeleton={nodes.Object_445.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_448.geometry}
            material={materials.e79aaee882a4}
            skeleton={nodes.Object_448.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_451.geometry}
            material={materials.e79cbce79d9b}
            material-color={snap.e79cbce79d9b}
            skeleton={nodes.Object_451.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_454.geometry}
            material={materials.e5a4b4e58f91}
            material-color={snap.e5a4b4e58f91}
            skeleton={nodes.Object_454.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_457.geometry}
            material={materials.e8a1a3e69c8d}
            material-color={snap.e8a1a3e69c8d}
            skeleton={nodes.Object_457.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_460.geometry}
            material={materials.e885b0e5b8a6}
            material-color={snap.e885b0e5b8a6}
            skeleton={nodes.Object_460.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_463.geometry}
            material={materials.e8a3a4e5ad90}
            material-color={snap.e8a3a4e5ad90}
            skeleton={nodes.Object_463.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_466.geometry}
            material={materials.e68aabe882a9}
            material-color={snap.e68aabe882a9}
            skeleton={nodes.Object_466.skeleton}
          />
        </group>
      </group>
      <OrbitControls ref={controls} maxDistance={400} minDistance={15} />
    </group>
  );
}

useGLTF.preload("/Girl/scene.gltf");
