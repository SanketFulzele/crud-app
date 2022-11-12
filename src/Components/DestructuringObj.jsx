import React from 'react'

const DestructuringObj = () => {

    const person = {
        id: "007",
        name: 'James',
        dept: {
          id: 'D001',
          name: 'Spy',
          address: {
            street: '30 Wellington Square',
            city: 'Chelsea'  
          }
        }  
      }
    
    //   ||------ Scenario 1-----||
    
    const id1 = person.id;
      const name1 = person.name;
      const dept1 = person.dept;
        console.log(id1, name1, dept1)
      
      const {id, name, dept} = person;
      console.log(id, name, dept);   // 007 James {}
    
      //   ||------ Scenario 1-----||
      
      
      
      //   ||------ Scenario 2-----||
      
      const address1 = person.dept.address;
      console.log(address1)
      
      const {dept : {address} } = person;
      console.log(address)  // {street: '30 Wellington Square', city: 'Chelsea'}
      
      //   ||------ Scenario 2-----||



      //   ||------ Scenario 3-----||

      const street1 = person.dept.address.street;
      const city1 = person.dept.address.city;
      console.log(street1, city1);

      const {dept : {address: {street, city} } } = person;
      console.log(street, city) // 30 Wellington Square Chelsea

      //   ||------ Scenario 3-----||
    
  return (
    <div>
      <h3>Destructuring Objects</h3>
    </div>
  )
}

export default DestructuringObj
