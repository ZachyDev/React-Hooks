import React, { useState } from 'react'

function HookCounter3() {
    const [user, setUser] = useState({ Firstname: '', Lastname: '' })
    return (
        <form>
            <input
             type="text" 
             value = { user.Firstname } 
             onChange = { e => setUser({ ...user,Firstname: e.target.value })}
             />
             
             <input 
             type = "text"
             value = { user.Lastname }
             onChange = { e => setUser({ ...user,Lastname: e.target.value })}
             />
             <h2>FirstName - { user.Firstname }</h2>
             <h2> LastName - { user.Lastname }</h2>
             <strong> { JSON.stringify(user) }</strong>

        </form>
    )
}

export default HookCounter3
