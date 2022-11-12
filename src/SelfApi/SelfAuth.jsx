import { Button } from '@mui/material'
import React from 'react'

const SelfAuth = () => {

    const Url = `https://cliniceasy.in/restAPI/index.php/Home/getPatients`;

    const data = {
        "hospital_id": "1",
        "user_id": "5",
        "search": "9689455261",
    }
    let username = 'meat'
    let password = 1100;
    const encode = window.btoa(username +":"+ password)

    const options = {
        method: "POST",
        headers: new Headers({
            'Content-type': "text/plain",
            // 'Authorization': 'Basic' + encode,
        }),
        body: JSON.stringify(data)
    }

    const handleAuth = async () => {
        const response = await fetch(Url, options);
        const result = await response.json();
        console.log(result)
    }

    return (
        <>
            <center> 
            <h3>Clinic Easy Authorization</h3>
            </center>
            <Button variant='contained' onClick={handleAuth}>Call Auth API</Button>
        </>
    )
}

export default SelfAuth
