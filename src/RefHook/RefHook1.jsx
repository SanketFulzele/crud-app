import { Button } from '@mui/material'
import React, { useRef } from 'react'

const RefHook1 = () => {
    const inputValue = useRef("");
    console.log(inputValue);

    const handleChange = () => {
        inputValue.current.focus();
        inputValue.current.style.backgroundColor = "#800a3d";
    }

  return (
    <div>
      <h5>useRef Hook Example 2</h5>
      <input type="text" ref={inputValue}  />

      <Button variant='contained' onClick={handleChange}> Submit </Button>
    </div>
  )
}

export default RefHook1
