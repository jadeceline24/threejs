import './App.css';
import {Canvas} from '@react-three/fiber';
import Home from './components/Home';

function App() {
  return (
    <Canvas
      camera={{
        fov: 64,
        position: [2.3, 1.5, 2.3],
      }}
    >
      {/* <color attach="background" args={['#333333']} />
    <ambientLight intensity={0.2} />
    <pointLight position={[5, 5, 5]} />
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh> */}
      <Home />
    </Canvas>
  );
}

export default App;
