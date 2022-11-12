import { useState } from 'react'

const UseCounter = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const increment = () => {
    return setValue(value + 5);
  }

  const decrement = () => {
    return setValue(value - 5)
  }

  const reset = () => {
    return setValue(initialValue);
  }
  return [value, increment, decrement, reset]
}

export default UseCounter;
