import React from 'react'
import PortfolioProps from '../props/PortfolioProps'
import ForlandLiving from '../assets/ForlandLiving.PNG'
import PortfolioWebsite from '../assets/PortfolioWebsite.PNG'

const Portfolio = () => {
  return (
    <div className='portfolio-sect'>
      <PortfolioProps 
        img={ForlandLiving}
        title="Ecommerce Website"
        tag1="REACT"
        tag2="HTML"
        tag3="CSS"
        tag4="JAVASCRIPT"
      />

      <PortfolioProps 
        img={PortfolioWebsite}
        title="Portfolio Website"
        tag1="THREE.JS"
        tag2="REACT"
        tag3="HTML"
        tag4="CSS"
      />

      <PortfolioProps 
        img={PortfolioWebsite}
        title="Portfolio Website"
        tag1="THREE.JS"
        tag2="REACT"
        tag3="HTML"
        tag4="CSS"
      />
    </div>
  )
}

export default Portfolio