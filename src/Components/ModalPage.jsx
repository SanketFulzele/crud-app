import React, { useState } from 'react'

const ModalPage = () => {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",

  })

  const handleInput = (event ) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((prev) => {
      return { ...prev, [name]: value }
    })    
  }

  const clicked = () => {
    console.log(formData)

  }

  return (
    <div>

    <input type="text" onChange={handleInput} name="username" value={formData.username} placeholder="User Name" />
    <input type="email" onChange={handleInput} name="email" value={formData.email} placeholder="Email" />
    <input type="password" onChange={handleInput} name="password" value={formData.password} placeholder="Password" />

    <button onClick={clicked}>click</button>
      
    </div>
  )
}

export default ModalPage




