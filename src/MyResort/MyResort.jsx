import React from 'react'
import Select from 'react-select';
import MyData from './MyData';
// import SelectOptions from './SelectOptions';
// import AsyncSelect from 'react-select/async';

const MyResort = () => {

  const options = [
    { value: "jack", label: "Jack", color: "gold" },
    { value: "mario", label: "Mario", color: "gold" },
    { value: "mike", label: "Mike", color: "gold" },
  ];

  const colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "pink", fontWeight: "800", fontSize: "20px" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      console.log("options", data, isFocused, isSelected, isDisabled);
      return {
        ...styles,
        color: data.color,
        backgroundColor: "green",
        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled
              ? isSelected
                  ? "grey"
                  : "white"
              : undefined,
      },
      }
    },
    placeholder: (styles) => ({ ...styles, color: "blue", }),
    singleValue: (styles) => ({ ...styles, fontWeight: "800", fontSize: "19px", color: "white" }),
  }

  const handleChange = (selectedOption) => {
    console.log("handleChange", selectedOption)
  }

  // const loadOptions = (searchValue, callback) => {
  //   console.log(searchValue, callback);
  // }

  return (
    <div>

      <Select options={options} onChange={handleChange} styles={colorStyles} className="size" />
      {/* <AsyncSelect loadOptions={loadOptions} onChange={handleChange} styles={colorStyles} /> */}


      {/* <SelectOptions /> */}

      <MyData/>
    </div>
  )
}

export default MyResort
