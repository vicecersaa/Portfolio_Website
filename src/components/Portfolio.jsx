import React from 'react'
import PortfolioProps from '../props/PortfolioProps'
import ComingSoon from '../assets/comingsoon.jpg'
import ForlandLiving from '../assets/FORLAND.png'
import DavidLight from '../assets/DavidLieWebsiteLight.PNG'

const Portfolio = () => {
  return (
    <div className='portfolio-sect'>
      <a target='blank' href='https://reactfiber.vercel.app/'>
      <PortfolioProps 
        img={ForlandLiving}
        title="Company Profile Website"
        tag1="THREE.JS"
        tag2="REACT"
        tag3="HTML"
        tag4="CSS"
      />
      </a>
    <a target='blank' href='https://forlandliving.com'>
    <PortfolioProps 
        img={ComingSoon}
        title="Ecommerce Website"
        tag1="-"
        tag2="-"
        tag3="-"
        tag4="-"
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
