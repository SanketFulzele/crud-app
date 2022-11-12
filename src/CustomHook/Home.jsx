import { Button } from '@mui/material';
import React from 'react'
import UseCounter from './useCounter';

const Home = () => {

    const [counter, increment, decrement, reset] = UseCounter(0);
    
  return (
    <div>
      <h3>{counter}</h3>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  )
}

export default Home
