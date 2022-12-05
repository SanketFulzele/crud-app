import axios from 'axios'
import React from 'react'

const ClinicAuth = () => {

  // refresh token and access token code for authorization api

  const url = `www.api.com`;
  const email ="test@gmail.com";
  const password = "secret007";

  const data = {
    email: email,
    password: password
  }

  // const handleSubmit = async() => {
  //   const response = await axios.post(url, data, {withCredentials: true});

  //   console.log(response.data);

     // we get refresh token from api with withCredentials true in cookies in application section in chrome 
     // we get access token from response of api with response.data in console 
  // }

  const handleSubmit = async() => {
    const {data} = await axios.post (url, data, {withCredentials: true});

    axios.defaults.headers.common['Authorization'] = `Bearer ${data[`token`]}`;
 
  }

handleSubmit();


  return (
    <div>
      <h5>Clinic Auth</h5>



    </div>
  )
}

export default ClinicAuth
