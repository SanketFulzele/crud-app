// useLayoutEffect Hook is similar to useEffect but its run before the useEffect
// useLayoutEffect Hook gets updated before the screen update

import { Button } from '@mui/material';
import React, { useEffect, useLayoutEffect, useState } from 'react'

const LayoutEffect = () => {

    const [num, setNum] = useState(0);

    useEffect(() => {
        console.log("The First UseEffect Hook");
    },[])
    useEffect(() => {
        console.log("The Second UseEffect Hook");
    },[])
    useEffect(() => {
        console.log("The Third UseEffect Hook");
    },[])

    useLayoutEffect(() => {
        console.log("The Last Layout Effect Hook")
    },[])


    // useEffect(() => {
    //     if (num === 0) {
    //         setNum( num + Math.floor( Math.random() * 100))
    //     }
    //     console.log(num);
    // },[num])

    useLayoutEffect(() => {
        if (num === 0) {
            setNum( num + Math.floor( Math.random() * 100))
        }
        console.log(num);
    },[num])

  return (
    <div>
      <h4>Use Layout Effect Hook</h4>

      <h6>My New Random Number {num} </h6>

      <Button onClick={() => setNum(0)}>New Number</Button>
    </div>
  )
}

export default LayoutEffect;
