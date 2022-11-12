import { Button } from '@mui/material';
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AlertToast = () => {
    
  const notify = () => {
    toast.error('Otp is Wrong', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      });
  }

  // ! this is the comment
  // ? this is the comment
  // * this is the comment
  //  this is the comment

  return (
    <div>
      <h4> React Toast Alert </h4>

    <Button variant='contained' onClick={notify}> Notify </Button>

    <ToastContainer 
    position='top-right'
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      theme='dark'
    />
    </div>
  )
}

export default AlertToast;
