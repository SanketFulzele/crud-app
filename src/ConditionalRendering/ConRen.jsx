import React, { useState } from 'react'

const ConRen = () => {
    const [login, setLogin] = useState(2);

   return (
    <>
    <h5> {login === 1 ? "Welcome User 1" :
    login === 2 ? "Welcome User 2" : "Welcome Guest"}  </h5>
    </>
   )

}

export default ConRen;
