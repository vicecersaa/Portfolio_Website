import React from 'react'
import PortfolioProps from '../props/PortfolioProps'
import ForlandLiving from '../assets/FORLAND.png'
import DavidLie from '../assets/DavidLieWebsite.png'
import DavidLight from '../assets/DavidLieWebsiteLight.PNG'

const Portfolio = () => {
  return (
    <div className='portfolio-sect'>
      <a target='blank' href='https://reactfiber.vercel.app/'>
      <PortfolioProps 
        img={DavidLie}
        title="Portfolio Website"
        tag1="THREE.JS"
        tag2="REACT"
        tag3="HTML"
        tag4="CSS"
      />
      </a>
    <a target='blank' href='https://forlandliving.com'>
    <PortfolioProps 
        img={ForlandLiving}
        title="Ecommerce Website"
        tag1="REACT"
        tag2="HTML"
        tag3="CSS"
        tag4="JAVASCRIPT"
      />
    </a>
    <a target='blank' href='https://reactfiber.vercel.app/'>
      <PortfolioProps 
        img={DavidLight}
        title="Portfolio Website"
        tag1="THREE.JS"
        tag2="REACT"
        tag3="HTML"
        tag4="CSS"
      />
      </a>
    </div>
    
  )
}

export default Portfolio