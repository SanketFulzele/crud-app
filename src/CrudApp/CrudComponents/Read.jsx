import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {

    const [data, setData] = useState([])

    function getData() {
        axios.get("https://6348ffafa59874146b150ddc.mockapi.io/crudTest")
            .then((response) => {
                console.log(response.data);
                setData(response.data);

            });
    }

    const handleDelete = (id) => {
        axios.delete(
            `https://6348ffafa59874146b150ddc.mockapi.io/crudTest/${id}`
        ).then(() => {
            getData()
        })
    }

    const setToLocalStorage = (id, name, email) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
    }


    useEffect(() => {
        getData();
    }, []);


    return (
        <div className='Flex'>
            <h5>Read Operation</h5>
            <table className="table" style={{ width: "80vw" }}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>

                {
                    data.map((eachData) => {
                        return (
                            <>
                                <tbody>
                                    <tr>
                                        <th scope="row"> {eachData.id} </th>
                                        <td>{eachData.name}</td>
                                        <td>{eachData.email}</td>

                                        <td>
                                            <Link to="/update">
                                                <button className='btn btn-success'
                                                onClick={() => setToLocalStorage(eachData.id, eachData.name, eachData.email)}> Edit </button>
                                            </Link>
                                        </td>

                                        <td> <button className='btn btn-danger'
                                            onClick={() => handleDelete(eachData.id)}> Delete </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default Read
