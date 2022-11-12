import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Update = () => {

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        
        axios.put(`https://6348ffafa59874146b150ddc.mockapi.io/crudTest/${id}`, {
            name: name,
            email: email,
        }).then(() => {
            navigate("/read")
        })
    }

    return (
        <div className='Flex'>
            <h5>Update</h5>
            <form style={{ width: "50vw" }}>

                <div className="mb-3">
                    <label htmlFor="text" className="form-label">
                        User Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleUpdate}  >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Update
