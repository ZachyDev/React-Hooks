import React, { useState } from 'react'

function HookCounter2() {
    const initialState = 0;
    const [count, setCount] = useState(initialState)
    return (
        <div>
        Count: { count }
            <button onClick = { ()=> setCount(initialState)}>Reset Counter</button> 
            <button onClick = { ()=> setCount(count + 1)}>Increment Counter</button>
            <button onClick = { ()=> setCount(count - 1)}>Decrement Counter</button>
        </div>
    )
}

export default HookCounter2
