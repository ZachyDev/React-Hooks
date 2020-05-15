import React, { useState } from 'react'

function HookCounter() {
  const initialState = 0;
  const [count, setCount] = useState(initialState)
  return (
    <div>
      Count - { count }
      <button onClick = {() => setCount(count + 1 )}>Counter</button>
    </div>
  )
}

export default HookCounter
