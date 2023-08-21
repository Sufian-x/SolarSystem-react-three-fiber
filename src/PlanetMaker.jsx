import { useRef } from 'react'
import './App.css'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'

export default function Planet(props) {

  const sphereRef = useRef();
  const rotateSphere = () => {
    if (sphereRef.current) {
      sphereRef.current.rotateY(props.planetSpeed);
    }
  };
  useFrame(rotateSphere);

  const orbitRef = useRef();
  const rotateOrbit = () => {
    if (orbitRef.current) {
      orbitRef.current.rotateY(props.objSpeed);
    }
  };
  useFrame(rotateOrbit);

  return (

    <object3D ref={orbitRef}>
      <mesh ref={sphereRef} position={[props.x, 0, 0]}>
        <sphereGeometry args={[props.rad, 32, 32]} />
        <meshStandardMaterial map={useTexture(props.map)} roughness={2} />
      </mesh>
    </object3D>

  )
}
