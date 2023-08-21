import { Suspense } from 'react'
import './App.css'
import Sun from './Sun.jsx'
import Saturn from './Saturn.jsx'
import Planet from './PlanetMaker.jsx'
import { Canvas} from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
// import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'

function App() {

  return (
    <Canvas camera={{ position: [0,5,14] }}>
      <Environment background files={[
        'planets/stars.jpg',
        'planets/stars.jpg',
        'planets/stars.jpg',
        'planets/stars.jpg',
        'planets/stars.jpg',
        'planets/stars.jpg',
      ]} />
      <OrbitControls />
      <ambientLight  />
      <pointLight color={0xf4e99b} intensity={100} distance={1000} />
      <Suspense fallback={null}>
        <Sun />
        <Planet map={'planets/mercury.jpg'} x={-3} rad={0.18} objSpeed={0.01} planetSpeed={0.093} />
        {/* Venus */}
        <Planet map={'planets/venus.jpg'} x={-3.9} rad={0.29} objSpeed={0.015} planetSpeed={0.002} />

        <Planet map={'planets/earth.jpg'} x={-5} rad={0.41} objSpeed={0.01} planetSpeed={0.02} />

        <Planet map={'planets/mars.jpg'} x={-5.9} rad={0.24} objSpeed={0.008} planetSpeed={0.018} />

        <Planet map={'planets/jupiter.jpg'} x={-7.5} rad={0.74} objSpeed={0.002} planetSpeed={0.04} />

        <Saturn x={-8.7} rad={0.45} objSpeed={0.001} planetSpeed={0.0091}/>

        <Planet map={'planets/uranus.jpg'} x={-10.5} rad={0.55} objSpeed={0.0007} planetSpeed={0.03} />

        <Planet map={'planets/neptune.jpg'} x={-11.8} rad={0.5} objSpeed={0.0002} planetSpeed={0.034} />

        {/* <EffectComposer>
        <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer> */}
      </Suspense>

    </Canvas>

  )
}

export default App
