import React from 'react'

const MyData = () => {

    const data = [
        {
            property_address:"Bin bhg",
            property_city: "Nagpur ",
            property_name:"22 street",
            property_policies: {
                check_in: "at morning",
                check_out: "at noon",
            },
            services: [
                
            ]
        }
    ]

    return (
        <div>

        {data.map((value) => {
            return <>
            <h4> {value.property_address} </h4>
            <h4> {value.property_policies.check_in} </h4>

            </>
        })}

        </div>
    )
}

export default MyData
