import React, { Suspense, useState } from 'react'
import { Stage, PresentationControls, PerformanceMonitor, OrbitControls, useTexture, Plane} from '@react-three/drei';
import {GULUM} from './components/GULUM';
import { Canvas, MeshStandardMaterial} from "@react-three/fiber";
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import ButtonSect from './components/ButtonSect';
import Contact from './components/Contact'
import Footer from './components/Footer';
import { createContext } from 'react';
import Switch from './components/Switch';
import { Mesh } from 'three';






export const ThemeContext = createContext(null);

function App() {
  const [skill, setSkill] = React.useState(false)
  const [timeline, setTimeline] = React.useState(true)
  
  
  const openSectSkill = () => {
    setSkill(true)
    setTimeline(false)
  }


 const [theme, setTheme] = React.useState("dark")

 const toggleTheme = () => {
  setTheme((prev) => (prev === "dark" ? "light" : "dark"))
 }


 const openSectTimeline = () => {
  setTimeline(true)
  setSkill(false)
}


  return (
  <ThemeContext.Provider value={{ theme, toggleTheme }}>
  <div className='App' id={theme}>
    
    {theme === "dark" && <Switch changeTheme={toggleTheme}
      icon={theme === "dark" && <i class="fa-solid fa-sun"></i>}
    />}
    
    {theme === "light" && <Switch changeTheme={toggleTheme}
      icon={theme === "light" && <i class="fa-solid fa-moon"></i>}
    />}

    <Header />
    
   
    <Canvas  id="canvas" performance={{ min: 0.5 }} dpr={[1,2]} shadows camera={{ fov: 50 }}>
      <pointLight position={[10, 10, 10]} />
      <PresentationControls speed={10} enableZoom={false} global polar={[-0.1, Math.PI / 4]}> 
        <directionalLight color="blue" position={[10, 0, 0]} />
        <Stage environment={"forest"}>
            <GULUM scale={0.003}/>
        </Stage>
      </PresentationControls>
      <OrbitControls autoRotate enableZoom={false} />
    </Canvas>
    <Portfolio />
    {theme === "light" && <ButtonSect
      color={timeline && theme === "light" && "black"}
      color1={timeline && theme === "light" && "white"}
      color2={skill && theme === "light" && "black"}
      color3={skill && theme === "light" && "white"}
      button1={openSectTimeline}
      button2={openSectSkill}
    />}

    {theme === "dark" && <ButtonSect 
      color={timeline && theme === "dark" && "white"}
      color1={timeline && theme === "dark" && "black"}
      color2={skill && theme === "dark" && "white"}
      color3={skill && theme === "dark" && "black"}
      button1={openSectTimeline}
      button2={openSectSkill}
    />}

    <div className='timeline-animation'>
      {timeline && <Timeline />}
    </div>
    <div className='skills-animation'>
      {skill && <Skills />}
    </div>

    <Contact />
    <Footer />
  </div>
  </ThemeContext.Provider>
  );
}

export default App;
