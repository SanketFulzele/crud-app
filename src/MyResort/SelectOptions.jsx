import React from 'react';
import chroma from 'chroma-js';
// import { ColourOption, colourOptions } from '../data';
import Select, { StylesConfig } from 'react-select';

const SelectOptions = () => {

    const dot = (color = 'transparent') => ({
        alignItems: 'center',
        display: 'flex',
    
        ':before': {
            backgroundColor: color,
            borderRadius: 10,
            content: '" "',
            display: 'block',
            marginRight: 8,
            height: 10,
            width: 10,
        },
    });

    const colourOptions = [
        {value: "jack", label: "Jack", color: "red"},
        {value: "mario", label: "Mario", color: "marron"},
        {value: "mike", label: "Mike", color: "blue"},
      ];

    // const colourStyles: StylesConfig<ColourOption> = {
    const colourStyles = {
        control: (styles) => ({ ...styles, backgroundColor: 'white' }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            const color = chroma(data.color);
            return {
                ...styles,
                backgroundColor: isDisabled
                    ? undefined
                    : isSelected
                        ? data.color
                        : isFocused
                            ? color.alpha(0.1).css()
                            : undefined,
                color: isDisabled
                    ? '#ccc'
                    : isSelected
                        ? chroma.contrast(color, 'white') > 2
                            ? 'white'
                            : 'black'
                        : data.color,
                cursor: isDisabled ? 'not-allowed' : 'default',
    
                ':active': {
                    ...styles[':active'],
                    backgroundColor: !isDisabled
                        ? isSelected
                            ? data.color
                            : color.alpha(0.3).css()
                        : undefined,
                },
            };
        },
        input: (styles) => ({ ...styles, ...dot() }),
        placeholder: (styles) => ({ ...styles, ...dot('red') }),
        singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
    };

    const handleChange = (selectedOption) => {
        console.log("handleChange", selectedOption)  
      }

    return (
        <div>

            <Select
                // defaultValue={colourOptions[2]}
                onChange={handleChange}
                options={colourOptions}
                styles={colourStyles}
            />

        </div>
    )
}

export default SelectOptions;