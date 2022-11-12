import { Button } from '@mui/material'
import React, { useReducer } from 'react'
import reducer from './reducer';

const initialValue = 0;

const ReducerHook = () => {

    const [count, dispatch] = useReducer(reducer, initialValue)

  return (
    <div>
    <Button onClick={() => dispatch({type: "INC" })}>Add</Button>
    <h5>{count}</h5>
    <Button onClick={() => dispatch({type: "DEC" })}> Subtract </Button>
    </div>
  )
}

export default ReducerHook;
