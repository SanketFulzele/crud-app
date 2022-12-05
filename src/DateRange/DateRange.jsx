import React from 'react'
import "./dateRange.css";
import { useEffect, useRef, useState } from 'react';
import { Calendar } from 'react-date-range'
import format from 'date-fns/format';

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const DateRange = () => {

    const [calender, setCalender] = useState('')

    const [open, setOpen] = useState(false);

    const refOne = useRef(null);

    useEffect(() => {
        setCalender(format(new Date(), 'MM/dd/yyyy'))
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

    const handleSelect = (date) => {
        setCalender(format(date, 'MM/dd/yyyy'))
    }

    console.log(calender, "date")

    return (
        <div>
            <h1>date range</h1>

            <input value={calender} readOnly
                className='inputBox'
                onClick={() => setOpen(open => !open)}
                onChange={e => console.log(e.target.value)}
            />


            <div ref={refOne}>
                {open &&
                    <Calendar
                        date={new Date()}
                        onChange={handleSelect}
                        className="calenderElement"
                    />
                    }
            </div>





        </div>
    )
}

export default DateRange
