import { Stage, PresentationControls} from '@react-three/drei';
import {GULUM} from './components/GULUM';
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <Canvas dpr={[1,2]} shadows camera={{ fov: 100 }} style={{"position": "absolute"}}>
    <PresentationControls speed={1.5} global polar={[-0.1, Math.PI / 4]}> 
      <Stage environment={"sunset"}>
        <GULUM scale={0.0001} />
      </Stage>
    </PresentationControls>
  </Canvas>
  );
}

export default App;
