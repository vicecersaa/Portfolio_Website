import React from 'react'
import TimelineProps from '../props/TimelineProps'
import {useRef} from "react"

const Timeline = () => {


  return (
    <>
    <div className='timeline'>
      <div className='timeline-title'>
      <h1>Timeline</h1>
      </div>
      <TimelineProps 
        time="2022"
        tag="First Line of Code"
        date="The Beginning"
        text="I wrote my first line of code that started this path
              into the digital world that i never could've imagine,
              Code change me into a whole different person."
      />
      
      <TimelineProps   
        time="2022"
        tag="Learning HTML"
        date="First Month"
        text="The first month of learning coding was the most
              challenging part of my journey, i need to get used
              to the new language that i'm learning."
      />
      
      <TimelineProps   
        time="2022"
        tag="Learning CSS"
        date="Second Month"
        text="Learning CSS is the most fun part of it all and at 
              the same time also the most stressful because sometimes 
              what we want is not necessarily easy to apply."
      />

      <TimelineProps   
        time="2022"
        tag="Learning Javascript"
        date="Third Month"
        text="Learned Javascript from Free Code Camp makes me realize that
              we could do anything litterally in Coding, this was the
              reason im in love with coding."
      />

      <TimelineProps   
        time="2022"
        tag="Learning React"
        date="Foured Month"
        text="Learning React was HARD but at the same time it gives me
              confident to take it a step further into the world of coding,
              it lets me to have a more organize code."
      />
    </div>
      
    
    </>
  )
}

export default Timeline