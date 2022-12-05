import React from 'react'
import Path from './Path';
import { useParams } from 'react-router-dom';

const Material = () => {

  const params = useParams();

  return (
    <div>
      <h5> Changing Parameter Name</h5>

      {JSON.stringify(params)}

      <Path/>


    </div>
  )
}

export default Material
