import React from 'react'
import { Stage, PresentationControls} from '@react-three/drei';
import {GULUM} from './components/GULUM';
import { Canvas } from "@react-three/fiber";
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import ButtonSect from './components/ButtonSect';
import { useTransition, animated } from 'react-spring'

function App() {
  const [skill, setSkill] = React.useState(false)
  const [timeline, setTimeline] = React.useState(true)
  
  
  const openSectSkill = () => {
    setSkill(true)
    setTimeline(false)
  }

  const openSectTimeline = () => {
    setTimeline(true)
    setSkill(false)
  }

 
 
  return (
  <div className='App'>
    <Header />
    <Canvas id="canvas" dpr={[1,2]} shadows camera={{ fov: 45 }}>
      <PresentationControls speed={1.5} global polar={[-0.1, Math.PI / 4]}> 
        <Stage environment={"forest"}>
          <GULUM scale={0.003} />
        </Stage>
      </PresentationControls>
    </Canvas>
    <Portfolio />
    <ButtonSect
      color={timeline && "white"}
      color1={timeline && "black"}
      color2={skill && "white"}
      color3={skill && "black"}
      button1={openSectTimeline}
      button2={openSectSkill}
    />
    <div className='timeline-animation'>
      {timeline && <Timeline />}
    </div>
    <div className='skills-animation'>
      {skill && <Skills />}
    </div>
  </div>
  );
}

export default App;
