import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const { nodes, materials } = useGLTF('planets/Saturn/scene.gltf')
  const group = useRef()
  useFrame(() => {
    if (group.current) {
      group.current.rotateY(props.planetSpeed); // Adjust rotation speed as needed
    }
  });
  const orbitRef = useRef();
    const rotateOrbit = () => {
      if (orbitRef.current) {
        orbitRef.current.rotateY(props.objSpeed);
      }
    };
    useFrame(rotateOrbit);
  return (
    <object3D ref={orbitRef}>
        <group {...props} ref={group} dispose={null} scale={props.rad} position={[props.x,0,0]}>  
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.758}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-0.419, Math.PI / 2, 0]}>
            <mesh geometry={nodes.Object_4.geometry} material={materials.Saturn} />
            <mesh geometry={nodes.Object_5.geometry} material={materials.rings} />
          </group>
        </group>
      </group>
    </group>
    </object3D>
  )
}
