// it creates a mutable variable which will not re-render the components
// used to access the DOM element directly

import React, { useEffect, useRef, useState } from 'react'

const RefHook = () => {
    const [userInput, setUserInput] = useState("");
    // const [count, setCount] = useState();
    const count = useRef(100);
    console.log(count, "COUNT USEREF HOOK")

    useEffect(()=> {
        // setCount(count+1);
        count.current = count.current + 1;
    })

  return (
    <div>
      REF HOOK
      <input type="number" value={userInput}
      onChange={(e) => setUserInput(e.target.value)} />

      {/* <p>THE NUMBER OF TIMES COMPONENT RENDER : {count} </p> */}
      <p>THE NUMBER OF TIMES COMPONENT RENDER : {count.current} </p>
    </div>
  )
}

export default RefHook
