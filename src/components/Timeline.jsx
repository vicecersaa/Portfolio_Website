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
        time="2021"
        tag="Starting The Journey Of Code"
        date="The Beginning"
        text="This is my first time trying to grasp all that i learned from college, started this path
              into the digital world that i never could've imagine,
              Code change me into a whole different person."
      />
      
      <TimelineProps   
        time="2022"
        tag="First Time Freelancing"
        date="First Month"
        text="The first time freelancing was quite a bit rough have a lot of basics needed 
              to accomplish the work but still struggling for some issues but i get through it."
      />
      
      <TimelineProps   
        time="2022 - 2023"
        tag="First Time Employed"
        date="First Month"
        text="Getting the first job was quite easy due to my experience on working freelance for about almost a year,
              i learned a lot from this company including SEO and Content Writing."
      />

      <TimelineProps   
        time="2023 - 2024"
        tag="Getting Back To Freelancing"
        date="First Day"
        text="The reason i quit my job is not only for freelancing but to enhance my portfolio skills
              aswell."
      />

      <TimelineProps   
        time="2024"
        tag="Freelance"
        date="Present"
        text="I got a quite lot of freelancing project base on contract from a couple of company
              in this particular field."
      />
    </div>
      
    
    </>
  )
}

export default Timeline
