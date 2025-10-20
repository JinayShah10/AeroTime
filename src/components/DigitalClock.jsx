import React from 'react'
import './DigitalClock.css'

const DigitalClock = (props) => {
  return (
    <div className='clock-container-back'>
      <div className="clock-container-front">
        <h2 className='time'>
          {props.time}
        </h2>
         <h2 className="day">{props.day}</h2>
      </div>
     
    </div>
  )
}

export default DigitalClock
