import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Create = () => {
  
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();

  // const header = {"Access-Control-Allow-Origin": "*"};

  const handleSubmit = (e) => {

    e.preventDefault();
    axios.post(
      'https://6348ffafa59874146b150ddc.mockapi.io/crudTest',
      {
        name: name,
        email: email,
      })
    .then(()=> {
      navigate("/read");
    });
  }

  return (
    <div className='Flex'>
      <h5>Create</h5>
      <form style={{ width: "50vw" }}>
       
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="text"
            onChange={(e)=> setName(e.target.value)}
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
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Create
