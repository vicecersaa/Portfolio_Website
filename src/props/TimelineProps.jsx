import React from 'react'

const TimelineProps = (props) => {
  return (
    <div className='timeline-props'>
        <div className='timeline-sect'>
          <span>{props.time}</span>
          <h3>{props.tag}</h3>
          <p>{props.date}</p>
        </div>
      <p>{props.text}</p>
    </div>
  )
}

export default TimelineProps