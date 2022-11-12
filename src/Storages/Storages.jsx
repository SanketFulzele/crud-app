import React from 'react'

const Storages = () => {

  //  Local Storage 
  // you can only store strings in the local storage

  localStorage.setItem('myName', 'BoB Marley');
  console.warn(localStorage.getItem('myName'))
  localStorage.setItem('myName', 'Garry v');  // for editing the local storage value
  // localStorage.removeItem('name');


  // Session Storage

  sessionStorage.setItem('myName', 'Dave Hudson')
  console.warn(sessionStorage.getItem('myName')) 
  sessionStorage.setItem('myName', 'Bear Grills') // for editing the session storage value
  // sessionStorage.removeItem('myName');


  //  Cookies
  // cookies sizes are small because every time its updated the data goes to the server

  document.cookie = 'Fname=kyle; expires=' + new Date(9999, 0, 1).toUTCString()
  document.cookie = 'Lname=Jenner; expires=' + new Date(9999, 0, 1).toUTCString()
  console.warn(document.cookie);


  return (
    <div>
      <h4>Session Storage, LocalStorage, Cookies</h4>
    </div>
  )
}

export default Storages;
