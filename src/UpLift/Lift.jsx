import React from 'react'
import { useState } from 'react'

const Lift = ({text, clicked}) => {

    const [error, setError] = useState()

    const handleChange = (e) => {
        // console.log(e.target.value)
    }

    const handleBlur = (e) => {
        let value = e.target.value;

        if(value === "sm@gmail.com") {
            setError("Welcome User ")
        }else {
            setError("Email id is Wrong !")
        }
    }

  return (
    <div>
      <h3>{text} </h3>

      <p style={{color: "red"}}> {error} </p>
      <input type="text" onChange={handleChange} onBlur={handleBlur} />

      <button onClick={clicked}> Clicked </button>

    </div>
  )
}

export default Lift
