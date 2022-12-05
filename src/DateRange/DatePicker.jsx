import React from 'react'
import "./dateRange.css";
import { useEffect, useRef, useState } from 'react';
import { DateRange } from 'react-date-range'
import format from 'date-fns/format';
import { addDays } from 'date-fns';


import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const DatePicker = () => {

    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: "selection"
        }
    ])

    const [open, setOpen] = useState(false);

    const refOne = useRef(null);

    useEffect(() => {
        document.addEventListener("keydown", hideOnEscape, true)
        document.addEventListener("click", hideOnClickOutside, true)
    }, [])

    const hideOnEscape = (e) => {
        console.log(e.key)
        if (e.key === "Escape") {
            setOpen(false)
        }
    }

    const hideOnClickOutside = (e) => {
        // console.log(refOne.current)
        // console.log(e.target)
        if ( refOne.current && !refOne.current.contains(e.target)) {
            setOpen(false)
        }

    }


    return (
        <div>
            <h1>date range</h1>

            <input value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(range[0].startDate, "MM/dd/yyyy")}`}
             readOnly
                className='inputBox'
                onClick={() => setOpen(open => !open)}
                onChange={e => console.log(e.target.value)}
            />


            <div ref={refOne}>
                {open &&
                    <DateRange
                        onChange={item => setRange([item.selection])}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        ranges={range}
                        months={1}
                        direction="horizontal"
                        className="calenderElement"
                    />
                    }
            </div>






        </div>
    )
}

export default DatePicker;
