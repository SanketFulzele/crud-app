// SYNTAX OF USEMEMO HOOK
// const var_name = useMemo(callback, [dependency]);

import { Button } from '@mui/material'
import React, { useMemo, useState } from 'react'

const MemoHook = () => {
    const [myNum, setMyNum] = useState(0);
    const [show, setShow] = useState(false);

    const getValue = () => {
        return setMyNum(myNum + 1);
    }

    const countNumber = (num) => {
        console.log(num)
        for (let i = 0; i <= 1000000; i++) {
            return num;
        }
    }

    const CheckData = useMemo(() => {
        return countNumber(myNum);
    },[myNum])

    return (
        <div>
            <h5> Use Memo Hook</h5>

            <Button onClick={getValue}> Counter </Button>

            <p> My New Number : {CheckData} </p>
            
            <Button onClick={() => setShow(!show)}>
                {show ? "You Clicked Me" : "Click Me"}
            </Button>

        </div>
    )
}

export default MemoHook
