import { Button } from '@mui/material'
import React from 'react'

const SelfApi1 = () => {
    const url = `https://trickysys.com/demo/selfplay/androidApi/Master/bookingHistory`;

    const data = {
      user_id: "3",
      game_id: "2"
    }

    const handleCall = async() => {
      
         const result = await fetch(url, {
          method: "POST",
          headers: {
              "Content-type": "text/plain"
          },
          body: JSON.stringify(data)
       }  )
         const response = await result.json()
         console.log(response);
    }

  return (
    <div>
      <Button variant='contained' onClick={handleCall}>Calling API</Button>
      <h6>Trying SelfPlay API</h6>
    </div>
  )
}

export default SelfApi1
