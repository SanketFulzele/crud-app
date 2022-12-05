import React from 'react'

const AuthAccessToken = () => {

  let accessToken = "bearer wescfvgbhyjukinm343";
  console.log(accessToken)
  
  accessToken = accessToken.split(" ");
  console.log(accessToken[1])


  return (
    <div>
      <h1> Access Token </h1>


      
    </div>
  )
}

export default AuthAccessToken
