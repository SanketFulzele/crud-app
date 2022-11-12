import { Button } from '@mui/material'
import axios from 'axios';
// import axios from 'axios';
import React from 'react'

const SelfApi = () => {

    const Url = `https://trickysys.com/demo/selfplay/androidApi/Master/registration`;

    const URL = `https://trickysys.com/demo/selfplay/androidApi/Master/myProfile`;

    const url = `https://trickysys.com/demo/olf/androidApi/Master/Client_Login`;

    const myUrl = `https://6348ffafa59874146b150ddc.mockapi.io/crudTest`;

    const Data = {
        "name": "Sam Walson",
        "email": "samwalson90@gmail.com",
        "address": "Maharashtra, Nagpur",
        "mobile": "8168568989",
        "country_id": "1",
        "state_id": "22",
        "city_id": "1",
        "referal_by": "123425",
        "profile": "",
        "profile_name": "5.jpg",
    }
    
    const data = {
        mobile: "9850111244"
    }

    const myData = {
        name: "zoodd",
        email: "zoom1234kk5@gmail.com",
    }

    const DATA = {
        user_id: "28",
    }

    const CallApi = () => {

        fetch(Url, {
            method: 'POST',
            headers: {
                "Content-Type": "text/plain"
            },
            body: JSON.stringify(Data)
        }).then((res)=> {
            res.json().then((result) => {
                console.log(result)
            })
        })
    }

    return (
        <div>
        <h4>Self Api </h4>
            <Button variant='contained' onClick={CallApi}> Call Api </Button>
        </div>
    )
}

export default SelfApi
