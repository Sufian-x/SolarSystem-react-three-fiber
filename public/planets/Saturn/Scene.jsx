/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.11 scene.gltf 
Author: Freemodels (https://sketchfab.com/vivaanarora9)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/saturn-17b34b975dc3449da83f2ee7802004f3
Title: Saturn
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.758}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-0.419, Math.PI / 2, 0]}>
            <mesh geometry={nodes.Object_4.geometry} material={materials.Saturn} />
            <mesh geometry={nodes.Object_5.geometry} material={materials.rings} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
