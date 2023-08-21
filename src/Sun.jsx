import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('planets/Sun/scene.gltf')
  
  useFrame(() => {
    if (group.current) {
      group.current.rotateY(0.005); // Adjust rotation speed as needed
    }
  });
  return (
    <group ref={group} {...props} dispose={null} scale={0.24}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="3a2aaa22fb3d4b329318a980ad1bf6d1fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="UnstableStarCore" rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh name="UnstableStarCore_1_0" geometry={nodes.UnstableStarCore_1_0.geometry} material={materials.material} />
                </group>
                <group name="UnstableStarref" rotation={[-Math.PI / 2, 0, 0]} scale={1.01}>
                  <mesh name="UnstableStarref_2_0" geometry={nodes.UnstableStarref_2_0.geometry} material={materials.material_1} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

