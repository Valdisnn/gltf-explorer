import React, { useRef, useState, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useSnapshot } from "valtio";

export default function Zelda(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/Zelda/scene.gltf");
  const snap = useSnapshot(props.colors);
  const [hovered, setHovered] = useState(null);
  // eslint-disable-next-line
  const { actions } = useAnimations(animations, group);

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
      ref={group}
      {...props}
      dispose={null}
      position={[0, -1, 0]}
      scale={1.5}
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
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="mesh_zeldaBelt_29">
                <mesh
                  name="Object_40"
                  geometry={nodes.Object_40.geometry}
                  material={materials.mat_zelda}
                />
              </group>

              <group name="Zelda_rig_1261">
                <group name="GLTF_created_1">
                  <primitive object={nodes.GLTF_created_1_rootJoint} />
                  <group name="mesh_zelda_1252" />
                  <group name="mesh_zeldaCape_1253" />
                  <group name="mesh_zeldaEyesL_1254" />
                  <group name="mesh_zeldaEyesL_Highlights_1255" />
                  <group name="mesh_zeldaEyesR_1256" />
                  <group name="mesh_zeldaEyesR_Highlights_1257" />
                  <group name="mesh_zeldaHair_1258" />
                  <group name="mesh_zeldaPouch_1259" />
                  <group name="mesh_zeldaWaist_1260" />
                  <group name="mesh_zeldaEyebrows_845_correction">
                    <group name="mesh_zeldaEyebrows_845" />
                  </group>
                  <group name="mesh_zeldaEyecrease_846_correction">
                    <group name="mesh_zeldaEyecrease_846" />
                  </group>
                  <group name="mesh_zeldaMouth_847_correction">
                    <group name="mesh_zeldaMouth_847" />
                  </group>
                  <skinnedMesh
                    castShadow
                    name="Object_181"
                    geometry={nodes.Object_181.geometry}
                    material={materials.mat_zelda}
                    material-color={snap.mat_zelda}
                    skeleton={nodes.Object_181.skeleton}
                    morphTargetDictionary={
                      nodes.Object_181.morphTargetDictionary
                    }
                    morphTargetInfluences={
                      nodes.Object_181.morphTargetInfluences
                    }
                  />
                  <skinnedMesh
                    castShadow
                    name="Object_185"
                    geometry={nodes.Object_185.geometry}
                    material={materials.mat_zeldaEyes}
                    material-color={snap.mat_zeldaEyes}
                    skeleton={nodes.Object_185.skeleton}
                    morphTargetDictionary={
                      nodes.Object_185.morphTargetDictionary
                    }
                    morphTargetInfluences={
                      nodes.Object_185.morphTargetInfluences
                    }
                  />
                  <skinnedMesh
                    castShadow
                    name="Object_189"
                    geometry={nodes.Object_189.geometry}
                    material={materials.mat_zeldaEyes}
                    material-color={snap.mat_zeldaEyes}
                    skeleton={nodes.Object_189.skeleton}
                    morphTargetDictionary={
                      nodes.Object_189.morphTargetDictionary
                    }
                    morphTargetInfluences={
                      nodes.Object_189.morphTargetInfluences
                    }
                  />
                  <skinnedMesh
                    castShadow
                    name="Object_183"
                    geometry={nodes.Object_183.geometry}
                    material={materials.mat_zelda}
                    material-color={snap.mat_zelda}
                    skeleton={nodes.Object_183.skeleton}
                  />
                  <skinnedMesh
                    castShadow
                    name="Object_187"
                    geometry={nodes.Object_187.geometry}
                    material={materials.mat_zeldaEyes}
                    material-color={snap.mat_zeldaEyes}
                    skeleton={nodes.Object_187.skeleton}
                  />
                  <skinnedMesh
                    castShadow
                    name="Object_191"
                    geometry={nodes.Object_191.geometry}
                    material={materials.mat_zeldaEyes}
                    material-color={snap.mat_zeldaEyes}
                    skeleton={nodes.Object_191.skeleton}
                  />
                  <skinnedMesh
                    castShadow
                    name="Object_193"
                    geometry={nodes.Object_193.geometry}
                    material={materials.mat_zeldaHair}
                    material-color={snap.mat_zeldaHair}
                    skeleton={nodes.Object_193.skeleton}
                  />
                  <skinnedMesh
                    castShadow
                    name="Object_194"
                    geometry={nodes.Object_194.geometry}
                    material={materials.mat_zelda}
                    material-color={snap.mat_zelda}
                    skeleton={nodes.Object_194.skeleton}
                  />
                  <skinnedMesh
                    castShadow
                    name="Object_196"
                    geometry={nodes.Object_196.geometry}
                    material={materials.mat_zelda}
                    material-color={snap.mat_zelda}
                    skeleton={nodes.Object_196.skeleton}
                  />
                  <skinnedMesh
                    castShadow
                    name="Object_198"
                    geometry={nodes.Object_198.geometry}
                    material={materials.mat_zelda}
                    material-color={snap.mat_zelda}
                    skeleton={nodes.Object_198.skeleton}
                  />
                  <skinnedMesh
                    castShadow
                    name="Object_1016"
                    geometry={nodes.Object_1016.geometry}
                    material={materials.mat_zeldaHair}
                    skeleton={nodes.Object_1016.skeleton}
                  />
                  <skinnedMesh
                    castShadow
                    name="Object_1019"
                    geometry={nodes.Object_1019.geometry}
                    material={materials.mat_zelda}
                    material-color={snap.mat_zelda}
                    skeleton={nodes.Object_1019.skeleton}
                  />
                  <skinnedMesh
                    castShadow
                    name="Object_1022"
                    geometry={nodes.Object_1022.geometry}
                    material={materials.mat_zelda}
                    material-color={snap.mat_zelda}
                    skeleton={nodes.Object_1022.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Zelda/scene.gltf");
