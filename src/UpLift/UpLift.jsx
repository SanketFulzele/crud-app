import React from 'react'
import Lift from './Lift'

const UpLift = () => {
    const heading = "Lift";

    const handleClick = () => {
        console.warn("You clicked the button")
    }
  return (
    <div>
      <h3>Up Lift</h3>
      <Lift text={heading} clicked={handleClick}  />
    </div>
  )
}

export default UpLift
